import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';

export interface ApiCallerRequest {
  url: string;
  params?: Record<string, any>;
}

@Component({
  selector: 'app-api-caller',
  standalone: true,
  imports: [],
  templateUrl: './api-caller.component.html',
  styleUrl: './api-caller.component.css'
})
export class ApiCallerComponent {

  @Output() apiResponse = new EventEmitter<any>();

  @Output() apiError = new EventEmitter<any>();

  @Output() loadingChange = new EventEmitter<boolean>();

  constructor(
    private http: HttpClient
  ) {}

  execute(request: ApiCallerRequest): void {

    // Check URL
    if (!request.url) {
      console.error('API URL is missing');
      return;
    }

    console.log('Calling API:', request.url);
    console.log('Parameters:', request.params);

    this.loadingChange.emit(true);

    let httpParams = new HttpParams();

    // Add query parameters
    if (request.params) {

      Object.entries(request.params).forEach(
        ([key, value]) => {

          if (
            value !== null &&
            value !== undefined &&
            value !== ''
          ) {

            httpParams = httpParams.set(
              key,
              String(value)
            );

          }

        }
      );

    }

    // GET API call
    this.http.get(
      request.url,
      {
        params: httpParams
      }
    ).subscribe({

      next: (response) => {

        console.log('API Response:', response);

        this.loadingChange.emit(false);

        this.apiResponse.emit(response);

      },

      error: (error) => {

        console.error('API Error:', error);

        this.loadingChange.emit(false);

        this.apiError.emit(error);

      }

    });
  }
}
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-api-caller',
  imports: [],
  templateUrl: './api-caller.component.html',
  styleUrl: './api-caller.component.css'
})
export class ApiCallerComponent {
  @Input() apiUrl = '';

  @Input() params: Record<string, any> = {};

  @Output() apiResponse = new EventEmitter<any>();

  @Output() apiError = new EventEmitter<any>();

  @Output() loadingChange = new EventEmitter<boolean>();

  constructor(
    private http: HttpClient
  ) {}

  callApi(): void {

    if (!this.apiUrl) {
      console.error('API URL is missing');
      return;
    }

    this.loadingChange.emit(true);

    let httpParams = new HttpParams();

    Object.entries(this.params).forEach(
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

    this.http.get(
      this.apiUrl,
      {
        params: httpParams
      }
    ).subscribe({

      next: (response) => {

        this.loadingChange.emit(false);

        this.apiResponse.emit(response);

      },

      error: (error) => {

        this.loadingChange.emit(false);

        this.apiError.emit(error);

      }

    });
  }
}
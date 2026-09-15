import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { PostApiCallerRequest } from '../../../../models/get-api-definition';

@Component({
  selector: 'app-post-api-caller',
  imports: [],
  templateUrl: './post-api-caller.component.html',
  styleUrl: './post-api-caller.component.css'
})
export class PostApiCallerComponent {
 @Output() apiResponse = new EventEmitter<any>();

  @Output() apiError = new EventEmitter<any>();

  @Output() loadingChange = new EventEmitter<boolean>();

  constructor(
    private http: HttpClient
  ) {}

  execute(request: PostApiCallerRequest): void {

    if (!request.url) {
      console.error('POST API URL is missing');
      return;
    }

    console.log('POST URL:', request.url);
    console.log('POST Body:', request.body);

    this.loadingChange.emit(true);

    this.http.post(
      request.url,
      request.body
    ).subscribe({

      next: (response) => {

        console.log('POST Response:', response);

        this.loadingChange.emit(false);

        this.apiResponse.emit(response);
      },

      error: (error) => {

        console.error('POST Error:', error);

        this.loadingChange.emit(false);

        this.apiError.emit(error);
      }

    });
  }
}
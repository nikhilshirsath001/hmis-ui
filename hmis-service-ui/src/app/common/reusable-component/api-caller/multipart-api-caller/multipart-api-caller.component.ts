import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';

export interface MultipartApiCallerRequest {
  url: string;
  metadata: Record<string, any>;
  files: Record<string, File | null>;
  fileFieldNames?: Record<string, string>;
}

@Component({
  selector: 'app-multipart-api-caller',
  standalone: true,
  imports: [],
  templateUrl: './multipart-api-caller.component.html',
  styleUrl: './multipart-api-caller.component.css'
})
export class MultipartApiCallerComponent {

  @Output() apiResponse = new EventEmitter<any>();
  @Output() apiError = new EventEmitter<any>();
  @Output() loadingChange = new EventEmitter<boolean>();

  constructor(private http: HttpClient) {}

//   execute(request: MultipartApiCallerRequest): void {

//     if (!request.url) {
//       console.error('Multipart API URL is missing');
//       return;
//     }

//     const formData = new FormData();
// debugger;
//     // Metadata JSON
//     formData.append(
//       'metadata',
//       new Blob(
//         [JSON.stringify(request.metadata)],
//         { type: 'application/json' }
//       )
//     );

//     // Files
//     Object.entries(request.files).forEach(([fieldName, file]) => {

//       if (!file) {
//         return;
//       }

//       const requestName =
//         request.fileFieldNames?.[fieldName] || fieldName;

//       formData.append(
//         requestName,
//         file,
//         file.name
//       );
//     });

//     this.loadingChange.emit(true);

//     this.http.post(request.url, formData).subscribe({

//       next: (response) => {
//         this.loadingChange.emit(false);
//         this.apiResponse.emit(response);
//       },

//       error: (error) => {
//         this.loadingChange.emit(false);
//         this.apiError.emit(error);
//       }

//     });
//   }

execute(request: MultipartApiCallerRequest): void {

  if (!request.url) {
    console.error('Multipart API URL is missing');
    return;
  }

  const formData = new FormData();

  // Metadata JSON
  formData.append(
    'metadata',
    new Blob(
      [JSON.stringify(request.metadata)],
      { type: 'application/json' }
    )
  );

  // Files
  Object.entries(request.files).forEach(([fieldName, file]) => {

    if (!file) {
      return;
    }

    formData.append(
      'PAN',
      file,
      file.name
    );
  });

  this.loadingChange.emit(true);

  this.http.post(request.url, formData).subscribe({

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
import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';

import {
  ApiCallerComponent
} from '../../../../common/reusable-component/api-caller/api-caller.component';


import {
  GetApiDefinition
} from '../../../../models/get-api-definition';
import { PostApiCallerComponent } from '../../../../common/reusable-component/api-caller/post-api-caller/post-api-caller.component';
import { PATIENT_GET_APIS } from '../../../../constants/apis-configs/patient-api.config';
import { MultipartApiDefinition, PATIENT_MULTIPART_APIS, PATIENT_POST_APIS } from '../../../../constants/apis-configs/post/post-patient-api.config';
import { PostApiDefinition } from '../../../../constants/apis-configs/post/post-policy-api.config';
import { MultipartApiCallerComponent } from '../../../../common/reusable-component/api-caller/multipart-api-caller/multipart-api-caller.component';




@Component({
  standalone: true,

  selector: 'app-patient-main',

  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    FileUploadModule,
    ButtonModule,
    ApiCallerComponent,
    PostApiCallerComponent,
    MultipartApiCallerComponent
],

  templateUrl: './patient-main.component.html',

  styleUrl: './patient-main.component.css'
})
export class PatientMainComponent {


  /* =========================================================
     API CALLERS
     ========================================================= */

  @ViewChild(ApiCallerComponent)
  apiCaller!: ApiCallerComponent;


  @ViewChild(PostApiCallerComponent)
  postApiCaller!: PostApiCallerComponent;

  @ViewChild(MultipartApiCallerComponent)
multipartApiCaller!: MultipartApiCallerComponent;


  /* =========================================================
     API CONFIGURATION
     ========================================================= */

  getApis = PATIENT_GET_APIS;

  postApis = PATIENT_POST_APIS;

  multipartApis = PATIENT_MULTIPART_APIS;



  /* =========================================================
     SELECTED APIs
     ========================================================= */

  selectedApi: GetApiDefinition | null = null;

  selectedPostApi: PostApiDefinition | null = null;

  selectedMultipartApi: MultipartApiDefinition | null = null;



  /* =========================================================
     REQUEST DATA
     ========================================================= */

  apiParams: Record<string, any> = {};

  postBody: Record<string, any> = {};

  multipartValues: Record<string, any> = {};

  selectedFiles: Record<string, File | null> = {};



  /* =========================================================
     RESPONSE
     ========================================================= */

  apiResponse: any = null;

  apiError: any = null;

  apiLoading = false;



  /* =========================================================
     GET API
     ========================================================= */

  selectApi(api: GetApiDefinition): void {

    this.selectedApi = api;

    this.selectedPostApi = null;

    this.selectedMultipartApi = null;


    this.apiParams = {};

    this.postBody = {};

    this.multipartValues = {};

    this.selectedFiles = {};


    this.clearResponse();


    api.parameters.forEach(parameter => {

      this.apiParams[parameter.name] = '';

    });

  }



  executeApi(): void {

    if (!this.selectedApi) {
      return;
    }


    for (const parameter of this.selectedApi.parameters) {

      const value =
        this.apiParams[parameter.name];


      if (
        parameter.required &&
        (
          value === null ||
          value === undefined ||
          value.toString().trim() === ''
        )
      ) {

        console.error(
          `${parameter.label} is required`
        );

        return;
      }

    }


    this.clearResponse();


    this.apiCaller.execute({

      url: this.selectedApi.url,

      params: this.apiParams

    });

  }



  /* =========================================================
     POST API
     ========================================================= */

  selectPostApi(api: PostApiDefinition): void {

    this.selectedPostApi = api;

    this.selectedApi = null;

    this.selectedMultipartApi = null;


    this.apiParams = {};

    this.postBody = {};

    this.multipartValues = {};

    this.selectedFiles = {};


    this.clearResponse();


    api.fields.forEach(field => {

      this.postBody[field.name] = '';

    });

  }



  executePostApi(): void {

    if (!this.selectedPostApi) {
      return;
    }


    for (const field of this.selectedPostApi.fields) {

      const value =
        this.postBody[field.name];


      if (
        field.required &&
        (
          value === null ||
          value === undefined ||
          value.toString().trim() === ''
        )
      ) {

        console.error(
          `${field.label} is required`
        );

        return;
      }

    }


    this.clearResponse();


    this.postApiCaller.execute({

      url: this.selectedPostApi.url,

      body: this.postBody

    });

  }



  /* =========================================================
     MULTIPART API
     ========================================================= */

  selectMultipartApi(
    api: MultipartApiDefinition
  ): void {

    this.selectedMultipartApi = api;

    this.selectedApi = null;

    this.selectedPostApi = null;


    this.apiParams = {};

    this.postBody = {};

    this.multipartValues = {};

    this.selectedFiles = {};


    this.clearResponse();


    api.fields.forEach(field => {

      if (field.type === 'file') {

        this.selectedFiles[field.name] = null;

      } else {

        this.multipartValues[field.name] = '';

      }

    });

  }



  // executeMultipartApi(): void {

  //   if (!this.selectedMultipartApi) {
  //     return;
  //   }


  //   /* ---------------------------------------------------------
  //      Validate fields
  //      --------------------------------------------------------- */

  //   for (const field of this.selectedMultipartApi.fields) {

  //     if (field.type === 'file') {

  //       const file =
  //         this.selectedFiles[field.name];


  //       if (field.required && !file) {

  //         console.error(
  //           `${field.label} is required`
  //         );

  //         return;
  //       }

  //     } else {

  //       const value =
  //         this.multipartValues[field.name];


  //       if (
  //         field.required &&
  //         (
  //           value === null ||
  //           value === undefined ||
  //           value.toString().trim() === ''
  //         )
  //       ) {

  //         console.error(
  //           `${field.label} is required`
  //         );

  //         return;
  //       }

  //     }

  //   }


  //   /* ---------------------------------------------------------
  //      Create FormData
  //      --------------------------------------------------------- */

  //   const formData = new FormData();


  //   /* ---------------------------------------------------------
  //      Metadata
  //      --------------------------------------------------------- */

  //   const metadata: Record<string, any> = {};


  //   this.selectedMultipartApi.fields
  //     .filter(field => field.type !== 'file')
  //     .forEach(field => {

  //       metadata[field.name] =
  //         this.multipartValues[field.name];

  //     });


  //   formData.append(

  //     'metadata',

  //     new Blob(
  //       [
  //         JSON.stringify(metadata)
  //       ],
  //       {
  //         type: 'application/json'
  //       }
  //     )

  //   );


  //   /* ---------------------------------------------------------
  //      Files
  //      --------------------------------------------------------- */

  //   this.selectedMultipartApi.fields
  //     .filter(field => field.type === 'file')
  //     .forEach(field => {

  //       const file =
  //         this.selectedFiles[field.name];


  //       if (!file) {
  //         return;
  //       }


  //       const requestName = field.name;


  //       formData.append(

  //         requestName,

  //         file,

  //         file.name

  //       );

  //     });


  //   /* ---------------------------------------------------------
  //      Clear previous response
  //      --------------------------------------------------------- */

  //   this.clearResponse();


  //   /* ---------------------------------------------------------
  //      Call multipart API
  //      --------------------------------------------------------- */

  //   // We will use the multipart caller here.
  //   this.executeMultipartRequest(
  //     this.selectedMultipartApi.url,
  //     formData
  //   );

  // }


executeMultipartApi(): void {
  if (!this.selectedMultipartApi) return;

  // Validate fields
  for (const field of this.selectedMultipartApi.fields) {

    if (field.type === 'file') {

      const file = this.selectedFiles[field.name];

      if (field.required && !file) {
        console.error(`${field.label} is required`);
        return;
      }

    } else {

      const value = this.multipartValues[field.name];

      if (
        field.required &&
        (
          value === null ||
          value === undefined ||
          value.toString().trim() === ''
        )
      ) {
        console.error(`${field.label} is required`);
        return;
      }
    }
  }

  // Prepare metadata
  const metadata: Record<string, any> = {};

  this.selectedMultipartApi.fields
    .filter(field => field.type !== 'file')
    .forEach(field => {
      metadata[field.name] = this.multipartValues[field.name];
    });

  // Prepare files
  const files: Record<string, File | null> = {};

  this.selectedMultipartApi.fields
    .filter(field => field.type === 'file')
    .forEach(field => {
      files[field.name] = this.selectedFiles[field.name] || null;
    });

  // Prepare backend file-name mapping
  const fileFieldNames: Record<string, string> = {};

  this.selectedMultipartApi.fields
    .filter(field => field.type === 'file')
    .forEach(field => {

      if (field.name) {
        fileFieldNames[field.fieldName] = field.name;
      }

    });

  this.clearResponse();

  this.multipartApiCaller.execute({
    url: this.selectedMultipartApi.url,
    metadata: metadata,
    files: files,
    fileFieldNames: fileFieldNames
  });
}

  /* =========================================================
     FILE SELECTION
     ========================================================= */

  onFileSelect(
    event: any,
    fieldName: string
  ): void {

    const file =
      event.files?.[0];


    if (!file) {
      return;
    }


    this.selectedFiles[fieldName] = file;

  }



  onFileRemove(
    fieldName: string
  ): void {

    this.selectedFiles[fieldName] = null;

  }



  /* =========================================================
     MULTIPART EXECUTION
     ========================================================= */

  // executeMultipartRequest(
  //   url: string,
  //   formData: FormData
  // ): void {

  //   /*
  //    * This method will be connected to your reusable
  //    * MultipartApiCallerComponent.
  //    *
  //    * See the component below.
  //    */

  //   this.apiLoading = true;

  //   this.apiError = null;

  //   this.apiResponse = null;


  //   this.multipartCaller.execute({

  //     url: url,

  //     formData: formData

  //   });

  // }


//   executeMultipartRequest(
//   url: string,
//   formData: FormData
// ): void {

//   this.apiLoading = true;
//   this.apiError = null;
//   this.apiResponse = null;

//   this.multipartApiCaller.execute({
//     url: url,
//     formData: formData
//   });

// }


  /* =========================================================
     MULTIPART CALLER
     ========================================================= */

  @ViewChild('multipartCaller')
  multipartCaller!: any;



  /* =========================================================
     RESPONSE HANDLING
     ========================================================= */

  onApiResponse(
    response: any
  ): void {

    console.log(
      'GET Response:',
      response
    );

    this.apiResponse = response;

  }



  onApiError(
    error: any
  ): void {

    console.error(
      'GET Error:',
      error
    );

    this.apiError = error;

  }



  onLoadingChange(
    loading: boolean
  ): void {

    this.apiLoading = loading;

  }



  onPostApiResponse(
    response: any
  ): void {

    console.log(
      'POST Response:',
      response
    );

    this.apiResponse = response;

  }



  onPostApiError(
    error: any
  ): void {

    console.error(
      'POST Error:',
      error
    );

    this.apiError = error;

  }



  onPostLoadingChange(
    loading: boolean
  ): void {

    this.apiLoading = loading;

  }



  /* =========================================================
     MULTIPART RESPONSE
     ========================================================= */

  onMultipartApiResponse(
    response: any
  ): void {

    console.log(
      'Multipart Response:',
      response
    );

    this.apiLoading = false;

    this.apiResponse = response;

  }



  onMultipartApiError(
    error: any
  ): void {

    console.error(
      'Multipart Error:',
      error
    );

    this.apiLoading = false;

    this.apiError = error;

  }



  onMultipartLoadingChange(
    loading: boolean
  ): void {

    this.apiLoading = loading;

  }



  /* =========================================================
     CLEAR
     ========================================================= */

  clearResponse(): void {

    this.apiResponse = null;

    this.apiError = null;

    this.apiLoading = false;

  }



  clearRequest(): void {

    if (this.selectedApi) {

      this.apiParams = {};

      this.selectedApi.parameters
        .forEach(parameter => {

          this.apiParams[parameter.name] = '';

        });

    }


    if (this.selectedPostApi) {

      this.postBody = {};

      this.selectedPostApi.fields
        .forEach(field => {

          this.postBody[field.name] = '';

        });

    }


    if (this.selectedMultipartApi) {

      this.multipartValues = {};

      this.selectedFiles = {};


      this.selectedMultipartApi.fields
        .forEach(field => {

          if (field.type === 'file') {

            this.selectedFiles[field.name] = null;

          } else {

            this.multipartValues[field.name] = '';

          }

        });

    }


    this.clearResponse();

  }



  /* =========================================================
     COPY RESPONSE
     ========================================================= */

  copyResponse(): void {

    if (this.apiResponse == null) {
      return;
    }


    const json =
      JSON.stringify(
        this.apiResponse,
        null,
        2
      );


    navigator.clipboard
      .writeText(json)
      .then(() => {

        console.log(
          'Response copied'
        );

      });

  }

}
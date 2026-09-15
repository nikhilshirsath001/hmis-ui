import { Component, ViewChild } from '@angular/core';
import { ApiCallerComponent } from '../../../../common/reusable-component/api-caller/api-caller.component';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { GetApiDefinition } from '../../../../models/get-api-definition';
import { POLICY_GET_APIS } from '../../../../constants/apis-configs/policy-api.config';
import { EligiblityService } from '../../../eligiblity/services/eligiblity.service';
import { ActivatedRoute } from '@angular/router';
import { POLICY_POST_APIS, PostApiDefinition } from '../../../../constants/apis-configs/post/post-policy-api.config';
import { PostApiCallerComponent } from '../../../../common/reusable-component/api-caller/post-api-caller/post-api-caller.component';

@Component({
  selector: 'app-policy-main-page',
  imports: [
    ApiCallerComponent,
    ButtonModule,
    CommonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    PostApiCallerComponent
],
  templateUrl: './policy-main-page.component.html',
  styleUrl: './policy-main-page.component.css'
})
export class PolicyMainPageComponent {
    @ViewChild(ApiCallerComponent)
  apiCaller!: ApiCallerComponent;

  @ViewChild(PostApiCallerComponent)
  postApiCaller!: PostApiCallerComponent;


  // ============================
  // GET API
  // ============================

  getApis = POLICY_GET_APIS;

  selectedApi!: GetApiDefinition;

  apiParams: Record<string, any> = {};


  // ============================
  // POST API
  // ============================

  postApis = POLICY_POST_APIS;

  selectedPostApi!: PostApiDefinition;

  postBody: Record<string, any> = {};


  // ============================
  // COMMON RESPONSE
  // ============================

  apiResponse: any = null;

  apiError: any = null;

  apiLoading = false;


  formType: any;


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}


  ngOnInit(): void {

    this.route.paramMap.subscribe((params) => {

      this.formType = params.get('formType') || '';

    });

  }


  // =====================================================
  // GET API
  // =====================================================

  selectApi(api: GetApiDefinition): void {

    this.selectedApi = api;

    this.selectedPostApi = undefined as any;

    this.apiParams = {};

    this.postBody = {};

    this.apiResponse = null;

    this.apiError = null;


    // Initialize GET parameters
    api.parameters.forEach((param) => {

      this.apiParams[param.name] = '';

    });

  }


  executeApi(): void {

    if (!this.selectedApi) {
      return;
    }


    // Validate GET parameters
    for (const parameter of this.selectedApi.parameters) {

      const value = this.apiParams[parameter.name];

      if (
        parameter.required &&
        (!value || value.toString().trim() === '')
      ) {

        console.error(
          `${parameter.label} is required`
        );

        return;
      }

    }


    this.apiResponse = null;

    this.apiError = null;


    // Execute GET
    this.apiCaller.execute({

      url: this.selectedApi.url,

      params: this.apiParams

    });

  }


  // =====================================================
  // POST API
  // =====================================================

  selectPostApi(api: PostApiDefinition): void {

    this.selectedPostApi = api;

    this.selectedApi = undefined as any;

    this.postBody = {};

    this.apiParams = {};

    this.apiResponse = null;

    this.apiError = null;


    // Initialize POST body
    api.fields.forEach((field) => {

      this.postBody[field.name] = '';

    });

  }


  executePostApi(): void {

    if (!this.selectedPostApi) {
      return;
    }


    // Validate POST fields
    for (const field of this.selectedPostApi.fields) {

      const value = this.postBody[field.name];

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


    this.apiResponse = null;

    this.apiError = null;


    // Execute POST
    this.postApiCaller.execute({

      url: this.selectedPostApi.url,

      body: this.postBody

    });

  }


  // =====================================================
  // COMMON RESPONSE
  // =====================================================

  onApiResponse(response: any): void {

    console.log('GET Response:', response);

    this.apiResponse = response;

  }


  onPostApiResponse(response: any): void {

    console.log('POST Response:', response);

    this.apiResponse = response;

  }


  onApiError(error: any): void {

    console.error('GET Error:', error);

    this.apiError = error;

  }


  onPostApiError(error: any): void {

    console.error('POST Error:', error);

    this.apiError = error;

  }


  onLoadingChange(loading: boolean): void {

    this.apiLoading = loading;

  }


  onPostLoadingChange(loading: boolean): void {

    this.apiLoading = loading;

  }


  // =====================================================
  // CLEAR
  // =====================================================

  clearRequest(): void {

    if (this.selectedApi) {

      this.apiParams = {};

      this.selectedApi.parameters.forEach((param) => {

        this.apiParams[param.name] = '';

      });

    }


    if (this.selectedPostApi) {

      this.postBody = {};

      this.selectedPostApi.fields.forEach((field) => {

        this.postBody[field.name] = '';

      });

    }


    this.apiResponse = null;

    this.apiError = null;

  }


  // =====================================================
  // COPY RESPONSE
  // =====================================================

  copyResponse(): void {

    const json = JSON.stringify(
      this.apiResponse,
      null,
      2
    );

    navigator.clipboard.writeText(json);

  }

}
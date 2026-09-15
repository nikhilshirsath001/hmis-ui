import { Component, ViewChild } from '@angular/core';
import { ApiCallerComponent } from '../../../../common/reusable-component/api-caller/api-caller.component';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { GetApiDefinition } from '../../../../models/get-api-definition';
import { ActivatedRoute } from '@angular/router';
import { EligiblityService } from '../../services/eligiblity.service';
import { ELIGIBLITY_GET_APIS } from '../../../../constants/apis-configs/eligiblity-api.config';

@Component({
  selector: 'app-eligibliity-main-page',
  imports: [    
    ApiCallerComponent,
    ButtonModule,
    CommonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,],
  templateUrl: './eligibliity-main-page.component.html',
  styleUrl: './eligibliity-main-page.component.css'
})
export class EligibliityMainPageComponent {
  apiCallForm!: FormGroup;

  @ViewChild(ApiCallerComponent)
  apiCaller!: ApiCallerComponent;

  selectedApi!: GetApiDefinition;
  apiParams: Record<string, any> = {};
  // apiError:any;
  apiUrl = '';
  apiResponse: any = null;
  formType: any;

  getApis= ELIGIBLITY_GET_APIS;

  constructor(
    private fb: FormBuilder,
    private eligiblityService: EligiblityService,
    private route: ActivatedRoute,
  ) {
    this.apiCallForm = this.fb.group({ abhaId: ['', [Validators.required]] });

    // this.patientForm = this.fb.group({
    //   abhaId: ['', [Validators.required]],

    //   identityDocument: [null, [Validators.required]],

    //   medicalReport: [null, [Validators.required]],

    //   otherDocument: [null, [Validators.required]],
    // });
  }

  ngOnInit(): void {
    // this.apiResponse=null;
    this.route.paramMap.subscribe((params) => {
      this.formType = params.get('formType') || '';
      this.loadForm();
    });
  }

  selectApi(api: GetApiDefinition): void {
    this.selectedApi = api;

    this.apiParams = {};

    this.apiResponse = null;

    this.apiError = null;

    // Initialize parameters
    api.parameters.forEach((param) => {
      this.apiParams[param.name] = '';
    });
  }

  apiError: any = null;

  apiLoading = false;

  executeApi(): void {

  if (!this.selectedApi) {
    return;
  }

  // Validate parameters
  for (const parameter of this.selectedApi.parameters) {

    const value = this.apiParams[parameter.name];

    if (
      parameter.required &&
      (!value || value.toString().trim() === '')
    ) {

      console.error(`${parameter.label} is required`);

      return;
    }
  }

  // Clear previous response
  this.apiResponse = null;
  this.apiError = null;

  // Execute API
  this.apiCaller.execute({
    url: this.selectedApi.url,
    params: this.apiParams
  });
}

  onApiResponse(response: any): void {
    console.log('API Response:', response);

    this.apiResponse = response;
  }

  onApiError(error: any): void {
    console.error('API Error:', error);

    this.apiError = error;
  }

  onLoadingChange(loading: boolean): void {
    this.apiLoading = loading;
  }

  loadForm(): void {
    // switch (this.formType) {
    //   case 'create-patient':
    //     // Create patient form
    //     break;
    //   case 'create-diagnosis':
    //     // Create diagnosis form
    //      this.diagnosysForm = this.fb.group({patientId: ['', [Validators.required]],});
    //     break;
    //   case 'create-procedure':
    //      this.procedureForm = this.fb.group({patientId: ['', [Validators.required]],});
    //     break;
    //   default:
    //     console.error('Unknown form type:', this.formType);
    //     break;
    // }
  }

  copyResponse(): void {
    const json = JSON.stringify(this.apiResponse, null, 2);

    navigator.clipboard.writeText(json).then(() => {
      console.log('Response copied');
    });
  }

  sendBackApi(): void {
  const data = {
    patientId: this.apiResponse.data.patient.patientId,
    payload: this.apiResponse.data
  };

  this.eligiblityService.sendBackApi(data).subscribe({
    next: (res: any) => {
      this.apiResponse = res.data;
    },
    error: (error) => {
      console.error('Send back API error:', error);
    }
  });
}
}

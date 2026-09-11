import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { PatientService } from '../../services/patient.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-patient-main',
  imports: [
    ButtonModule,
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    FileUploadModule,
  ],
  templateUrl: './patient-main.component.html',
  styleUrl: './patient-main.component.css',
})
export class PatientMainComponent {
  patientForm: FormGroup;
  diagnosysForm!:FormGroup;
  procedureForm!:FormGroup;

  

  isSubmitting = false;

  formType:any;

  apiResponse: any = {
  success: true,
  message: 'Patient created successfully',
  data: {
    patientId: 'PAT-10001',
    abhaId: '12-3456-7890-1234',
    status: 'ACTIVE'
  },
  timestamp: '2026-09-11T10:30:00'
};

  selectedFiles: {
    identityDocument: File | null;
    medicalReport: File | null;
    otherDocument: File | null;
  } = {
    identityDocument: null,
    medicalReport: null,
    otherDocument: null,
  };

  constructor(
    private fb: FormBuilder,
    private patientService: PatientService,
    private route: ActivatedRoute
  ) {
    this.patientForm = this.fb.group({
      abhaId: ['', [Validators.required]],

      identityDocument: [null, [Validators.required]],

      medicalReport: [null, [Validators.required]],

      otherDocument: [null, [Validators.required]],
    });
  }

   ngOnInit(): void {
    // this.apiResponse=null;
    this.route.paramMap.subscribe(params => {
      this.formType = params.get('formType') || '';
      this.loadForm();
    });
  }

  loadForm(): void {

    switch (this.formType) {

      case 'create-patient':
        // Create patient form
        break;

      case 'create-diagnosis':
        // Create diagnosis form
         this.diagnosysForm = this.fb.group({patientId: ['', [Validators.required]],});
        break;

      case 'create-procedure':
         this.procedureForm = this.fb.group({patientId: ['', [Validators.required]],});
        break;

      default:
        console.error('Unknown form type:', this.formType);
        break;
    }
  }

  copyResponse(): void {
  const json = JSON.stringify(this.apiResponse, null, 2);

  navigator.clipboard.writeText(json).then(() => {
    console.log('Response copied');
  });
}
  onFileSelect(
    event: any,
    controlName: 'identityDocument' | 'medicalReport' | 'otherDocument',
  ): void {
    const file = event.files?.[0];

    if (!file) {
      return;
    }

    this.selectedFiles[controlName] = file;

    this.patientForm.get(controlName)?.setValue(file);

    this.patientForm.get(controlName)?.markAsTouched();

    this.patientForm.get(controlName)?.updateValueAndValidity();
  }

  /**
   * Handle file removal
   */
  onFileRemove(
    controlName: 'identityDocument' | 'medicalReport' | 'otherDocument',
  ): void {
    this.selectedFiles[controlName] = null;

    this.patientForm.get(controlName)?.setValue(null);

    this.patientForm.get(controlName)?.markAsTouched();

    this.patientForm.get(controlName)?.updateValueAndValidity();
  }

  onSubmitDiagnosisForm(){
    if(this.diagnosysForm.invalid){
      this.diagnosysForm.markAllAsTouched();
      return;
    }

    const diagnosisObj =  this.diagnosysForm.getRawValue();

    this.patientService.submitDiagnosisForm(diagnosisObj).subscribe({
      next: (response:any) => {
        this.apiResponse = response.data;
      },
      error: (error) => {
        this.apiResponse = null;
      },
    });
  }

onSubmitProcedureForm(){
      if(this.procedureForm.invalid){
      this.procedureForm.markAllAsTouched();
      return;
    }

    const procedureObj =  this.procedureForm.getRawValue();

    this.patientService.submitDiagnosisForm(procedureObj).subscribe({
      next: (response:any) => {
        this.apiResponse = response.data;
      },
      error: (error) => {
        this.apiResponse = null;
      },
    });
  }

  onSubmit(): void {
    if (this.patientForm.invalid) {
      this.patientForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    const formData = new FormData();

    const metadata = {
      abhaId: this.patientForm.get('abhaId')?.value,
    };

    formData.append(
      'metadata',
      new Blob([JSON.stringify(metadata)], { type: 'application/json' }),
    );

    const identityDocument = this.selectedFiles.identityDocument;

    const medicalReport = this.selectedFiles.medicalReport;

    const otherDocument = this.selectedFiles.otherDocument;

    if (identityDocument) {
      formData.append('PHOTO', identityDocument, identityDocument.name);
    }

    if (medicalReport) {
      formData.append('PAN', medicalReport, medicalReport.name);
    }

    if (otherDocument) {
      formData.append('AADHAAR', otherDocument, otherDocument.name);
    }

    this.patientService.submitPatientDocuments(formData).subscribe({
      next: (response) => {
        this.isSubmitting = false;
      },
      error: (error) => {
        this.isSubmitting = false;
      },
    });
  }
}

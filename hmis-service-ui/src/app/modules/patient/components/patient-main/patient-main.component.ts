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

  isSubmitting = false;

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
  ) {
    this.patientForm = this.fb.group({
      abhaId: ['', [Validators.required]],

      identityDocument: [null, [Validators.required]],

      medicalReport: [null, [Validators.required]],

      otherDocument: [null, [Validators.required]],
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

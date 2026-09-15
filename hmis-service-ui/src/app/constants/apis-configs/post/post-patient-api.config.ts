import { PostApiDefinition } from "./post-policy-api.config";


export interface MultipartApiField {
  name: string;
  label: string;
  type: 'text' | 'file';
  required?: boolean;
  placeholder?: string;

  accept?: string;
  maxFileSize?: number;

  fieldName?:any;
}

export interface MultipartApiDefinition {
  id: string;
  name: string;
  description?: string;
  url: string;
  method: 'POST';
  fields: MultipartApiField[];
}


export const PATIENT_POST_APIS: PostApiDefinition[] = [
  {
    id: 'create-diagnosis',
    name: 'Create Diagnosis',
    description: 'Create a diagnosis for an existing patient.',
    url: 'http://localhost:8081/api/patient/diagnosis',
    method: 'POST',

    fields: [
      {
        name: 'patientId',
        label: 'Patient ID',
        type: 'text',
        required: true,
        placeholder: 'Enter Patient ID',
      }
    ]
  },

  {
    id: 'create-procedure',
    name: 'Create Procedure',
    description: 'Create a procedure for an existing patient.',
    url: 'http://localhost:8081/api/patient/procedure',
    method: 'POST',

    fields: [
      {
        name: 'patientId',
        label: 'Patient ID',
        type: 'text',
        required: true,
        placeholder: 'Enter Patient ID'
      }
    ]
  }
];

export const PATIENT_MULTIPART_APIS: MultipartApiDefinition[] = [
  {
    id: 'create-patient',
    name: 'Create Patient',
    description: 'Create a patient and upload the required documents.',
    url: 'http://localhost:8081/api/hmis/patient/create',
    method: 'POST',

    fields: [
      {
        name: 'abhaId',
        label: 'ABHA ID',
        type: 'text',
        required: true,
        placeholder: 'Enter ABHA ID',
        fieldName:'',
      },

      {
        name: 'identityDocument',
        label: 'Identity Document',
        type: 'file',
        required: true,
        accept: '.pdf,.jpg,.jpeg,.png',
        maxFileSize: 5000000,
                fieldName:'PHOTO',

      },

      {
        name: 'medicalReport',
        label: 'Medical Report',
        type: 'file',
        required: true,
        accept: '.pdf,.jpg,.jpeg,.png',
        maxFileSize: 5000000,
                fieldName:'PAN',

      },

      {
        name: 'otherDocument',
        label: 'Other Document',
        type: 'file',
        required: true,
        accept: '.pdf,.jpg,.jpeg,.png',
        maxFileSize: 5000000,
                fieldName:'AADHAAR',

      }
    ]
  }
];
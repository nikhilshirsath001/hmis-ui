import { GetApiDefinition } from "../../models/get-api-definition";

export const PATIENT_GET_APIS:GetApiDefinition[] = [

  {
    name: 'Eligibility Status',
    description: 'Check patient eligibility',
    url: 'http://localhost:8081/api/eligibility/status',

    parameters: [
      {
        name: 'abdmId',
        label: 'ABDM ID',
        placeholder: 'Enter ABDM ID',
        required: true
      }
    ]
  },

  {
    name: 'Get Patient',
    description: 'Get patient details',
    url: 'http://localhost:8081/api/hmis/patient',

    parameters: [
      {
        name: 'abhaId',
        label: 'ABHA ID',
        placeholder: 'Enter ABHA ID',
        required: true
      }
    ]
  },

  {
    name: 'Patient Contact',
    description: 'Get patient contact information',
    url: 'http://localhost:8081/api/hmis/patient/contact',

    parameters: [
      {
        name: 'abhaId',
        label: 'ABHA ID',
        placeholder: 'Enter ABHA ID',
        required: true
      }
    ]
  },

  {
    name: 'Patient Diagnosis',
    description: 'Get patient diagnosis',
    url: 'http://localhost:8081/api/diagnosis',

    parameters: [
      {
        name: 'patientId',
        label: 'Patient ID',
        placeholder: 'Enter Patient ID',
        required: true
      }
    ]
  }

];
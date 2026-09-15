import { GetApiDefinition } from "../../models/get-api-definition";

export const PRE_AUTH_GET_APIS:GetApiDefinition[] = [

  {
    name: 'Pre Auth',
    description: 'Get Pre Auth By Patient Id',
    url: 'http://localhost:8081/api/pre-auth/generate',

    parameters: [
      {
        name: 'patientId',
        label: 'Patient ID',
        placeholder: 'Enter Patient ID',
        required: true
      }
    ]
  }
]
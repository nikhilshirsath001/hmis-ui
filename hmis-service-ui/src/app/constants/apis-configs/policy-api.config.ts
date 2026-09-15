import { GetApiDefinition } from "../../models/get-api-definition";

export const POLICY_GET_APIS:GetApiDefinition[] = [

   {
    name: 'Get Policy',
    description: 'Get Policy details by patientId',
    url: ' http://localhost:8081/api/hmis/policy',

    parameters: [
      {
        name: 'patientId',
        label: 'Patient ID',
        placeholder: 'Enter Patient ID',
        required: true
      }
    ]
  },
]
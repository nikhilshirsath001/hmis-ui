import { GetApiDefinition } from "../../models/get-api-definition";

export const ELIGIBLITY_GET_APIS:GetApiDefinition[] = [

   {
    name: 'Get Patient',
    description: 'Get patient details',
    url: ' http://localhost:8081/api/eligibility/status',

    parameters: [
      {
        name: 'abhaId',
        label: 'ABHA ID',
        placeholder: 'Enter ABHA ID',
        required: true
      }
    ]
  },
]
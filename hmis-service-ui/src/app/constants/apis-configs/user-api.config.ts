import { GetApiDefinition } from "../../models/get-api-definition";

export const USER_GET_APIS:GetApiDefinition[] = [

   {
    name: 'Get Billing',
    description: 'Get Policy details by patientId',
    url: ' http://localhost:8081/api/hmis/billing/patient',

    parameters: [
      {
        name: 'patientId',
        label: 'Patient ID',
        placeholder: 'Enter Patient ID',
        required: true
      }
    ]
  },
     {
    name: 'Get Billing',
    description: 'Get Policy details by ClaimID',
    url: ' http://localhost:8081/api/hmis/billing',

    parameters: [
      {
        name: 'claimId',
        label: 'Claim ID',
        placeholder: 'Enter Claim ID',
        required: true
      }
    ]
  }
]
import { PostApiDefinition } from "./post-policy-api.config";

export const BILLING_POST_APIS: PostApiDefinition[] = [

  {
    id: 'create-policy',
    name: 'Create Billing',
    description: 'Create a new Billing.',
    url: 'http://localhost:8081/api/hmis/billing/create',
    method: 'POST',

    fields: [

      {
        name: 'patientId',
        label: 'Patient Id',
        type: 'number',
        required: true,
        placeholder: 'Enter Patient Id'
      }

    ]
  }

];
import { GetApiDefinition } from "../../../models/get-api-definition";

export interface PostApiField {
  name: string;
  label: string;
  type: 'text' | 'number' | 'date' | 'textarea' | 'boolean';
  required?: boolean;
  placeholder?: string;
}

export interface PostApiDefinition {
  id: string;
  name: string;
  description?: string;
  url: string;
  method: 'POST';
  fields: PostApiField[];
}

export const POLICY_GET_APIS: GetApiDefinition[] = [
  // your existing GET APIs
];


export const POLICY_POST_APIS: PostApiDefinition[] = [

  {
    id: 'create-policy',
    name: 'Create Policy',
    description: 'Create a new insurance policy.',
    url: 'http://localhost:8081/api/hmis/policy/create',
    method: 'POST',

    fields: [

      {
        name: 'patientId',
        label: 'Policy Number',
        type: 'number',
        required: true,
        placeholder: 'Enter policy number'
      },

      {
        name: 'policyNumber',
        label: 'Policy Holder Name',
        type: 'text',
        required: true,
        placeholder: 'Enter policy holder name'
      }

    ]
  }

];
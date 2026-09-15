import { ApiParameter } from "./api-parameter";

export interface GetApiDefinition {
      name: string;
  description?: string;
  url: string;
  parameters: ApiParameter[];
}

export interface PostApiCallerRequest {
  url: string;
  body: any;
}
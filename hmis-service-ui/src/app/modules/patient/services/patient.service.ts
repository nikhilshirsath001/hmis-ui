import { Injectable } from '@angular/core';
import { HttpClientService } from '../../../services/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class PatientService {


  controllerURL = "/hmis";
  
  constructor(private httpClientService: HttpClientService) { }

  submitPatientDocuments(data: any) {
    return this.httpClientService.postObservable(`${this.controllerURL}/patient/create`, data);
  }

  submitDiagnosisForm(data: any) {
    return this.httpClientService.postObservable(`${this.controllerURL}/diagnosis/create`, data);
  }
  
}

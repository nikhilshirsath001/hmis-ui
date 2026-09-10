import { Injectable } from '@angular/core';
import { HttpClientService } from '../../../services/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class PatientService {


  controllerURL = "/hmis/patient";
  
  constructor(private httpClientService: HttpClientService) { }

  submitPatientDocuments(data: any) {
    return this.httpClientService.postObservable(`${this.controllerURL}/create`, data);
  }

  
}

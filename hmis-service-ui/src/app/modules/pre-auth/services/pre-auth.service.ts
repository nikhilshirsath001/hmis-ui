import { Injectable } from '@angular/core';
import { HttpClientService } from '../../../services/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class PreAuthService {


  controllerURL = "/hmis";
  
  constructor(private httpClientService: HttpClientService) { }

  sendBackApi(data: any) {
    return this.httpClientService.postObservable(`${this.controllerURL}/pre-auth`, data);
  }

}

import { Injectable } from '@angular/core';
import { HttpClientService } from '../../../services/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class EligiblityService {

  controllerURL = "/hmis";
  
  constructor(private httpClientService: HttpClientService) { }

  sendBackApi(data: any) {
    return this.httpClientService.postObservable(`${this.controllerURL}/eligiblity`, data);
  }
}
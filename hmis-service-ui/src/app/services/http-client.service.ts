import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class HttpClientService {


  constructor(private httpClient: HttpClient) { }

  public getPromise(url: string, params?: HttpParams) {
    return firstValueFrom(this.httpClient.get(environment.apiUrl + url));
  }
  public getObservable(url: string, params?: HttpParams) {
    return this.httpClient.get(environment.apiUrl + url);
  }
  public postPromise(url: string, body: any, params?: HttpParams) {
    return firstValueFrom(this.httpClient.post(environment.apiUrl + url, body))
  }
  public postObservable(url: string, body: any, params?: any) {
    return this.httpClient.post(environment.apiUrl + url, body);
  }
  public patchPromise(url: string, body: any, params?: HttpParams) {
    return firstValueFrom(this.httpClient.patch(environment.apiUrl + url, body))
  }
  public patchObservable(url: string, body: any, params?: HttpParams) {
    return this.httpClient.patch(environment.apiUrl + url, body);
  }
  public deletePromise(url: string, body?: any, params?: HttpParams) {
    return firstValueFrom(this.httpClient.patch(environment.apiUrl + url, body))
  }
  public deleteObservable(url: string, body?: any, params?: HttpParams) {
    return this.httpClient.patch(environment.apiUrl + url, body);
  }

}

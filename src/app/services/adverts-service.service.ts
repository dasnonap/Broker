import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdvertsService {

  constructor(private httpClient : HttpClient) { }

  getAdvertPreviews (): Observable<any>{
    return this.httpClient.get("http://localhost:5000/api/adverts/previewadverts");
  }

  getUsers (): Observable<any>{
    return this.httpClient.get("http://localhost:5000/api/users");
  }
}

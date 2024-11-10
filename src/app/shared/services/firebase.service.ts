import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mealsApiUrl } from '../firebase/firebase-url';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private http: HttpClient) {}

  getRequest(): Observable<any> {
    return this.http.get(mealsApiUrl);
  }
  postRequest(url: string, body: any, headers?: any): Observable<any> {
    return this.http.post(url, body, { headers });
  }
}

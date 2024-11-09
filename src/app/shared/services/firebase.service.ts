import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { firebaseRestApi } from '../firebase/firebase-url';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private http: HttpClient) {}

  getRequest(): Observable<any> {
    return this.http.get(firebaseRestApi);
  }
}

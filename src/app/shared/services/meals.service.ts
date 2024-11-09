import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMeal } from '../interfaces/IMeal';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root',
})
export class MealsService {
  constructor(private firebaseService: FirebaseService) {}

  getMeals(): Observable<Array<IMeal>> {
    return this.firebaseService.getRequest();
  }
}

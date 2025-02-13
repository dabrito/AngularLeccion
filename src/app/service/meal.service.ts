import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meal } from '../interface/meal';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MealService {
  private apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

  constructor(private http: HttpClient) { }

  getMeals(): Observable<Meal[]> {
    return this.http.get<{ meals: Meal[] }>(this.apiUrl).pipe(
      map(response => response.meals)
    );
  }
}

  // getMeals(){
  //   return this.http.get<Meal[]>(this.apiUrl);
  // }

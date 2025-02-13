import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meal } from '../interface/meal';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  private apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

  constructor(private http: HttpClient) { }

  getMeals(){
    return this.http.get<Meal[]>(this.apiUrl);
  }
}

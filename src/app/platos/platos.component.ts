import { Component } from '@angular/core';
import { MealService } from '../service/meal.service';
import { HttpClientModule } from '@angular/common/http';
import { Meal } from '../interface/meal';

@Component({
  selector: 'app-platos',
  standalone: true,
  imports: [HttpClientModule],
  providers: [MealService],
  templateUrl: './platos.component.html',
  styleUrl: './platos.component.css'
})

export class PlatosComponent{
  meals: Meal[] = [];

  constructor(private mealService: MealService) { 
    mealService.getMeals().subscribe((respuesta) => {
      this.meals = respuesta as Array<Meal>;
    });
  }
}



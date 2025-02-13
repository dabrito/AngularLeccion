import { Component, OnInit } from '@angular/core';
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

export class PlatosComponent implements OnInit {
  meals: Meal[] = [];

  constructor(private mealService: MealService) { }
  
  ngOnInit(): void {
    this.mealService.getMeals().subscribe((respuesta: Meal[]) => {
      this.meals = respuesta;
    });
  }
}

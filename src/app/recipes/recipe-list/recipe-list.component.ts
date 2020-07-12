import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]= [new Recipe('test', 'testy test', 'https://recetasarabes.com/wp-content/img-recetas-arabes/2014/04/shawarma.jpg')
];

  constructor() { }

  ngOnInit(): void {
  }

}

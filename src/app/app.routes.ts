import { FormModuleComponent } from "./Components/form-module/form-module.component"
import { TrelloTodoComponent } from "./Components/trello-todo/trello-todo.component"
import { NotFoundComponent } from "./Components/not-found/not-found.component"
import { RouterModule, Routes } from "@angular/router";
import { MainFormComponent } from "./Components/main-form/main-form.component";
import { RatingComponent } from "./Components/rating/rating.component";


export const routes: Routes = [

  {
    path: 'formModel',
    component: FormModuleComponent,


  },
  {
    path: 'main-form',
    component: MainFormComponent,


  },
  {
    path: '',
    component: TrelloTodoComponent,


  },
  {
    path: 'rating',
    component: RatingComponent,


  },
  {
    path: '**',
    component: NotFoundComponent,


  },



];



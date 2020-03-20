import { NgModule } from '@angular/core';
import { ActivatedRoute, Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { ListActeurComponent } from './Acteur/list-acteur/list-acteur.component';
import { EditActeurComponent } from './Acteur/edit-acteur/edit-acteur.component';
import { AddActeurComponent } from './Acteur/add-acteur/add-acteur.component';
import { ListFilmComponent } from './Film/list-film/list-film.component';
import { EditFilmComponent } from './Film/edit-film/edit-film.component';
import { AddFilmComponent } from './Film/add-film/add-film.component';
import { ListGenreComponent } from './Genre/list-genre/list-genre.component';
import { EditGenreComponent } from './Genre/edit-genre/edit-genre.component';
import { AddGenreComponent } from './Genre/add-genre/add-genre.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'acteur', component: ListActeurComponent },
  { path: 'acteur/add', component: AddActeurComponent },
  { path: 'acteur/edit', component: EditActeurComponent },
  { path: 'film', component: ListFilmComponent },
  { path: 'film/add', component: AddFilmComponent },
  { path: 'film/edit', component: EditFilmComponent },
  { path: 'genre', component: ListGenreComponent },
  { path: 'genre/add', component: AddGenreComponent },
  { path: 'genre/edit/:id', component: EditGenreComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// export class ActivatedRouteComponent {
//   constructor(route: ActivatedRoute) {
//     const id: Observable<string> = route.params.pipe(map(p => p.id));
//   }
// }
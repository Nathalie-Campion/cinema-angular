import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListFilmComponent } from './Film/list-film/list-film.component';
import { AddFilmComponent } from './Film/add-film/add-film.component';
import { EditFilmComponent } from './Film/edit-film/edit-film.component';
import { ListActeurComponent } from './Acteur/list-acteur/list-acteur.component';
import { AddActeurComponent } from './Acteur/add-acteur/add-acteur.component';
import { EditActeurComponent } from './Acteur/edit-acteur/edit-acteur.component';
import { ListGenreComponent } from './Genre/list-genre/list-genre.component';
import { AddGenreComponent } from './Genre/add-genre/add-genre.component';
import { EditGenreComponent } from './Genre/edit-genre/edit-genre.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';

registerLocaleData(localeFr, 'fr-FR', localeFrExtra);

@NgModule({
  declarations: [
    AppComponent,
    ListFilmComponent,
    AddFilmComponent,
    EditFilmComponent,
    ListActeurComponent,
    AddActeurComponent,
    EditActeurComponent,
    ListGenreComponent,
    AddGenreComponent,
    EditGenreComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

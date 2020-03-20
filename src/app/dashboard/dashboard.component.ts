import { Component, OnInit } from '@angular/core';
import { GenreService } from 'src/app/service/genre.service';
import { FilmService } from 'src/app/service/film.service';
import { ActeurService } from 'src/app/service/acteur.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  films;
  genres;
  acteurs;

  constructor(
    private filmService: FilmService,
    private genreService: GenreService,
    private acteurService: ActeurService
  ) { }

  ngOnInit(): void {
    this.getFilms();
  }

  getFilms(){
    this.filmService.getFilms()
      .subscribe(data=>{
        this.films = data;
        console.log(data);
      })
  }

}

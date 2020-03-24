// import { ActeurService } from './../Service/acteur.service';
import { Component, OnInit, Output } from '@angular/core';
import { GenreService } from 'src/app/service/genre.service';
import { FilmService } from 'src/app/service/film.service';
import { Film } from 'src/app/models/film.models';
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
  actriceList;
  acteurList;
  somme: number;
  public doughnutChartLabels = ['femme', 'homme'];
  public doughnutChartData = [];
  public doughnutChartType = 'doughnut';
  nbactrice;
  nbacteur;

  constructor(
    private filmService: FilmService,
    private genreService: GenreService,
    private acteurService: ActeurService
  ) { }

  ngOnInit(): void {
    this.getFilms();
    this.getActeurs();
    this.getGenres();  
  }
    // liste des films
  getFilms(){
    this.filmService.getFilms()
      .subscribe(datafilm=>{
        this.films = datafilm;
        for(var i=0; i<this.films.length; i++){
          this.somme += this.films.note;
        }
        // console.log(datafilm);
        console.log("somme =")
        // console.log(this.films.length);
        console.log(this.somme);
      })
  }

    // liste des acteurs et actrices
  getActeurs(){
    this.acteurService.getActeurs()
      .subscribe(actors=> {
        this.actriceList = actors.filter(actors => actors.gender === "F");
        this.nbactrice = this.actriceList.length;
        console.log(this.nbactrice);
        this.acteurList = actors.filter(actors => actors.gender === "M");
        this.nbacteur = this.acteurList.length;
        this.doughnutChartData = [this.nbactrice, this.nbacteur];
        console.log(this.nbacteur);
      })
  }

  getGenres(){
    this.genreService.getGenres()
      .subscribe(genres=> {
        this.genres = genres;
        console.log(this.genres);
    })
  }

}

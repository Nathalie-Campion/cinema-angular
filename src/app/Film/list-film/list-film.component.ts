import { Component, OnInit } from '@angular/core';
// import { Film } from 'src/app/models/film.models';
import { FilmService } from 'src/app/service/film.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.scss']
})
export class ListFilmComponent implements OnInit {

  datas;
  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.getFilms();
  }

  getFilms(){
    this.filmService.getFilms()
      .subscribe(data=>{
        this.datas = data;
        console.log(data);
      })
  }

  ondelete(){
    
  }

}


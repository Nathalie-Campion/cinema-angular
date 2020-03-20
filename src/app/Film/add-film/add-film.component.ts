import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film.models';
import { Genre } from 'src/app/models/genre.models';
import { GenreService } from 'src/app/Service/genre.service';
import { FilmService } from 'src/app/Service/film.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.scss']
})
export class AddFilmComponent implements OnInit {

  film: Film = new Film();
  datas;

  constructor(
    private genreService: GenreService,
    private filmService: FilmService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  onSave(){
    
  }

  // getFilms(){
  //   this.filmService.getFilms()
  //     .subscribe(data=>{
  //       this.datas = data;
  //       // console.log(data)
  //     })
  // }

  // onSave(){
  //   this.filmService.save(this.film)
  //     .subscribe(
  //       (data: Film)=> {
  //         this.router.navigate(['/film']);
  //       }
  //     )
  // }

}



import { Component, OnInit } from '@angular/core';
import { GenreService } from './../../Service/genre.service';
import { Genre } from 'src/app/models/genre.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.scss']
})
export class EditGenreComponent implements OnInit {

  genre;

  constructor(private genreService: GenreService) { }

  ngOnInit(): void {
    // console.log(this.route.params['id']);
    // this.getGenre(id);
  }

  getGenre(id){
    this.genreService.find(id)
      .subscribe(data =>{
        this.genre = data;
      })
  }

  onEdit(){

  }

  // onEdit(){
  //   this.genreService.uptdate(this.genre.id)
  //   .subscribe(
  //     (genre: Genre)=> {
  //       this.router.navigate(['/genre']);
  //     }
  //   );
  // }
}



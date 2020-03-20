import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/models/genre.models';
import { GenreService } from 'src/app/service/genre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-genre',
  templateUrl: './list-genre.component.html',
  styleUrls: ['./list-genre.component.scss']
})
export class ListGenreComponent implements OnInit {

  datas;
  constructor(private genreService : GenreService) { }

  ngOnInit(): void {
    this.getGenres();
  }

  getGenres(){
    this.genreService.getGenres()
      .subscribe(data=>{
        this.datas = data;
        // console.log(data)
      })
  }

  ondelete(){
    this.genreService.delete(this.datas.id)
      .subscribe(data=>{
        this.datas = data;
        console.log("genre supprimé");
      })
  }
}

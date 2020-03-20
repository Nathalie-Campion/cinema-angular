import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/models/genre.models';
import { GenreService } from 'src/app/Service/genre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.scss']
})
export class AddGenreComponent implements OnInit {

  genre: Genre = new Genre();

  constructor(
    private genreService: GenreService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.genre.name = '';
  }

  onSave(){
    this.genreService.save(this.genre)
      .subscribe(
        (data: Genre)=> {
          this.router.navigate(['/genre']);
        }
      )
  }
}

  
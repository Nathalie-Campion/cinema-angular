import { Component, OnInit, Pipe } from '@angular/core';
// import { Acteur } from 'src/app/models/acteur.models';
import { ActeurService } from 'src/app/service/acteur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-acteur',
  templateUrl: './list-acteur.component.html',
  styleUrls: ['./list-acteur.component.scss']
})
export class ListActeurComponent implements OnInit {

  datas;
  constructor(private acteurService: ActeurService) { }

  ngOnInit(): void {
    this.getActeurs();
  }

  getActeurs(){
    this.acteurService.getActeurs()
      .subscribe(data=>{
        this.datas = data;
        console.log(data);
      })
  }

  ondelete(){
    
  }
}



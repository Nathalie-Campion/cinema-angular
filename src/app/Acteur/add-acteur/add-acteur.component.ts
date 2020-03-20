import { Component, OnInit } from '@angular/core';
import { Acteur } from 'src/app/models/acteur.models';
import { ActeurService } from 'src/app/Service/acteur.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-acteur',
  templateUrl: './add-acteur.component.html',
  styleUrls: ['./add-acteur.component.scss']
})
export class AddActeurComponent implements OnInit {

  acteur: Acteur = new Acteur();

  constructor(
    private acteurService: ActeurService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.acteur.name = '';
    this.acteur.firstname = '';
    this.acteur.birth = '';
    this.acteur.gender = '';
    this.acteur.nationality = '';
  }

  onSave(){
    this.acteurService.save(this.acteur)
      .subscribe(
        (data: Acteur)=> {
          this.router.navigate(['/']);
        }
      )
  }
}

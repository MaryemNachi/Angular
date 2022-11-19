import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/model/Personne';
import { EmbaucheService } from '../embauche.service';
@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {
  personnes : Personne[]=[];
  personne=new Personne;

  constructor(private embaucheService: EmbaucheService) { }

  ngOnInit(): void {
    this.personnes = this.embaucheService.getEmbauches();
  }

}

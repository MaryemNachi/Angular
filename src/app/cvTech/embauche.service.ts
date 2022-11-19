import { Injectable } from '@angular/core';
import { Personne } from 'src/app/model/Personne';
@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
 private personnes : Personne[];
  constructor() {
    this.personnes = [];
   }
   getEmbauches(): Personne[] {
    return this.personnes;
   }
    embaucher(personne: Personne) {
    const index = this.personnes.indexOf(personne);
    if (index <0) {
      this.personnes.push(personne);
    } else{
      alert('${personne.name} deja embauchee');
    }
  }
    debaucher(personne: Personne) {
    const index = this.personnes.indexOf(personne);
    if (index >=0) {
      this.personnes.splice(index, 1);
    }
}}

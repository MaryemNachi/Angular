import { Injectable } from '@angular/core';
import { Personne } from 'src/app/model/Personne';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
 private personnes : Personne[];
  constructor(private toastrService: ToastrService) {
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
     // alert(`${personne.name} deja embauchee`);
     this.toastrService.error(`${personne.name} deja embauchee`, 'Major Error', {
      timeOut: 3000,

    });
    }
  }
    debaucher(personne: Personne) {
    const index = this.personnes.indexOf(personne);
    if (index >=0) {
      this.personnes.splice(index, 1);
    }
}}

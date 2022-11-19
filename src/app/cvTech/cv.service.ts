import { Injectable } from '@angular/core';
import { Personne } from 'src/app/model/Personne';
@Injectable({
  providedIn: 'root'
})
export class CvService {
  private personnes : Personne[] ;

  constructor() { 
    this.personnes = [
      new Personne( 1, 'Ben Ismail','Meriem',21,"nachnoucha.jpg", 15236985, 'Student', "Tant qu'il y a de la vie , il y a de l'espoir",  'Software engineering student at INSAT',     'HTML CSS JS PHP' ),
      new Personne( 1, 'Bousrih','mohamed', 22, 'rotating_card_profile2.png',18566985,  'Student',"Tant qu'il y a de la vie , il y a de l'espoir",   'Network & Telecommunication engineering student at ENIT', 'HTML CSS JS PHP'),
     // new Personne( 1, 'Bouzid','Aymen', 22, '', 15236985, 'Student', "Tant qu'il y a de la vie , il y a de l'espoir",  'Sport', 'football' ),

    ];
  }
  getPersonnes(): Personne[] { 
    return this.personnes;
  }
}


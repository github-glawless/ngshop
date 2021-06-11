import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import DOGS from './dogdata.json'; 
import { Dog } from './dog';
//import { DogService } from './dog-list.component';


@Injectable({
    providedIn: 'root'
})
//console.log('1111 dogs.service.ts @@@@@ ');  
export class DogService implements OnInit {
    private dogData = DOGS;
  ngOnInit: any
  //all() :object [] {
  //  return  this.dogData ;

  all(): Observable<Dog[]> {
    return of(this.dogData);

  }
  constructor() { 
    console.log('2222 dogs.service.ts @@@@@ ');  

  }
  
  allDogs() {
  }
  
}


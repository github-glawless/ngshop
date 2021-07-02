import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import DOGS from './dogdata.json'; 
import { Dog } from './dog';
//import { DogService } from './dog-list.component';

console.log(`@@@@DOGS SERVICE@@@@`)



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
    
    console.log(`!!!! LIKES CONSTRUCTOR !!!!`)
    const likes = localStorage.getItem('likes');
    if (!likes) {
      localStorage.setItem('likes', JSON.stringify([]));
    }
    console.log(`LIKES = ${likes}`)
  }
  
  get(dogId: string): Dog[] {
    console.log(`DOGS.SERVICE 11111${dogId}`)
    return this.dogData.filter(dog => dog.id === dogId);
  }

  allDogs() {
    console.log(`DOGS.SERVICE 2222`)
  }
  getLikes(dogId): number {
    console.log(`DOGS.SERVICE 3333${dogId}`)
    const likes = JSON.parse(localStorage.getItem('likes'));
    // tslint:disable-next-line:radix
    return parseInt(likes[dogId]);
  }

  update(dog): void {
    const likes = JSON.parse(localStorage.getItem('likes')) || localStorage.setItem('likes', JSON.stringify({}));
    likes[dog.id] = dog.likes;
    localStorage.setItem('likes', JSON.stringify(likes));
  }
   
}


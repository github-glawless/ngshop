import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { DogService} from '../dogs.service';
import { FavoriteServiceService} from '../favorite-service.service';
import { Dog } from '../dog';

console.log(`@@@@DOG-LIST.COMPONENT@@@@`)

@Component({
  selector: 'dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})

export class DogListComponent implements OnInit {
  title: string = 'Dog List';
 
  dogs: object[] = [];
  favorites: object[] = [];
  viewFavorites = false ;

  constructor(private dogService: DogService,
              private favoriteService: FavoriteServiceService) {
    //this.dogService.all();
    //this.favoriteService.all();
    }

  //ngOnInit(): void { this.dogs=this.dogService.all()
  ngOnInit() {
    this.getUpdates();
  }
  getUpdates() {
    return this.dogService.all().subscribe(data => this.dogs = data);
  }
  getFavorites() {
   // return this.favoriteService.all().subscribe(favorites => this.favorites = favorites);
  }

  loadDogs() {
    this.dogService.all().subscribe(data => this.dogs = data);
  }




}

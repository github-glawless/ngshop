import { Component, OnInit, Input } from '@angular/core';
import { Dog } from '../dog';
import { DogService} from '../dogs.service';
//import { FavoritesService } from '../services/favorites.service';

console.log(`@@@@DOG-DETAIL.COMPONENT@@@@`)


@Component({
  selector: 'dog',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.css']
})

export class DogDetailComponent implements OnInit {
  @Input() dog: Dog;
  @Input() id: any;
  likes: number;

  constructor(private dogService: DogService) {
  console.log(`@@@@CONSTRUCTOR FOR DOG-DETAIL@@@@`)
  }

  ngOnInit() {
    console.log(`@@@@ DOG-DETAIL.COMPONENT NGONINITL@@@@`)
    this.likes = this.dogService.getLikes(this.dog.id) || 0;
    
  }
  
  addLike() {
    console.log(`@@@@ ADDLIKE     @@@@`)
    this.likes += 1;
    this.dogService.update({ id: this.dog.id, likes: this.likes });
    console.log('@@@@ LIKE COUNT  ${likes}');
  }

}

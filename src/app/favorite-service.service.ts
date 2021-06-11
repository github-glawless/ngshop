import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dog } from './dog';

@Injectable({
  providedIn: 'root'
})
export class FavoriteServiceService {
  favorites:Dog[]

  constructor() { }
}



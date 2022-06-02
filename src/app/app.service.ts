import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AppService {
  values$ = of([
    { id: 1, name: 'One', price: 100 },
    { id: 2, name: 'Two', price: 200 },
    { id: 3, name: 'Three', price: 10  }
  ])

  constructor() { }
}

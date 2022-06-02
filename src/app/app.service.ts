import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppService {
  people$ = of([
    { id: 1, name: 'John', age: 22 },
    { id: 2, name: 'Tony', age: 30 },
    { id: 3, name: 'Anakin', age: 49 },
  ]);

  constructor() {}
}

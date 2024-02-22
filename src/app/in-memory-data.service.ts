import { Injectable } from '@angular/core'
import { InMemoryDbService } from 'angular-in-memory-web-api'

import { Pet } from './pet'

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const pets = [
      { id: 12, name: 'Zone', type: 'dog' },
      { id: 13, name: 'Lucky', type: 'cat' },
      { id: 14, name: 'Kiki', type: 'dog' },
      { id: 15, name: 'Mickey', type: 'mouse' },
      { id: 16, name: 'Poo', type: 'Panda' },
      { id: 17, name: 'Snow white', type: 'Slave' },
      { id: 18, name: '636', type: 'Blue alien' },
    ]
    return { pets }
  }

  genId(pets: Pet[]): number {
    return pets.length > 0 ? Math.max(...pets.map((pet) => pet.id)) + 1 : 11
  }
}

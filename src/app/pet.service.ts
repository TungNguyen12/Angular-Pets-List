import { Injectable } from '@angular/core'

import { Observable, of } from 'rxjs'

import { Pet } from './pet'
import { PETS } from './pet-list'
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root',
})
export class PetService {
  constructor(private messageService: MessageService) {}

  getPets(): Observable<Pet[]> {
    const pets = of(PETS)
    this.messageService.add('PetService: fetched pets')
    return pets
  }

  getOnePet(id: number): Observable<Pet> {
    const pet = PETS.find((pet) => pet.id === id)!
    this.messageService.add(`PetService: retrieved the pet with id = ${id}`)
    return of(pet)
  }
}

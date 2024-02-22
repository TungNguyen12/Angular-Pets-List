import { Inject, Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, map, tap } from 'rxjs/operators'

import { Pet } from './pet'
import { PETS } from './pet-list'
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root',
})
export class PetService {
  private petsUrl = 'api/pets'

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`)

      return of(result as T)
    }
  }

  private log(message: string) {
    this.messageService.add(`PetService: ${message}`)
  }

  getPets(): Observable<Pet[]> {
    return this.http
      .get<Pet[]>(this.petsUrl)
      .pipe(catchError(this.handleError<Pet[]>(`getPets`, [])))
  }

  getOnePet(id: number): Observable<Pet> {
    const pet = PETS.find((pet) => pet.id === id)!
    this.messageService.add(`PetService: retrieved the pet with id = ${id}`)
    return of(pet)
  }
}

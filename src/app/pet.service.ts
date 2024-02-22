import { Injectable } from '@angular/core'
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

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  }

  // GET ALL PETS
  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.petsUrl).pipe(
      tap((_) => this.log('retrieved the pets 🐕‍🦺')),
      catchError(this.handleError<Pet[]>(`getPets`, []))
    )
  }

  //GET ONE PET
  getOnePet(id: number): Observable<Pet> {
    const url = `${this.petsUrl}/${id}`
    return this.http.get<Pet>(url).pipe(
      tap((_) => this.log(`retrieved pet id=${id}`)),
      catchError(this.handleError<Pet>(`getPet id=${id}`))
    )
  }

  addNewPet(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(this.petsUrl, pet, this.httpOptions).pipe(
      tap((newPet:Pet) => this.log(`added new pet to my list with id = ${newPet.id} and ${newPet.name} is a stupid ${newPet.type}`)),
      catchError(this.handleError<Pet>('addNewPet'))
    )
  }
}

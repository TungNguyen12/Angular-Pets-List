import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, map, tap } from 'rxjs/operators'

import { Pet, PetUpdate } from './pet'
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

  // CREATE NEW PET
  addNewPet(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(this.petsUrl, pet, this.httpOptions).pipe(
      tap((newPet: Pet) =>
        this.log(
          `added new pet to my list with id = ${newPet.id} and ${newPet.name} is a stupid ${newPet.type}`
        )
      ),
      catchError(this.handleError<Pet>('addNewPet'))
    )
  }

  // UPDATE PET INFO
  updatePet(pet: Pet): Observable<PetUpdate> {
    return this.http.put<Pet>(this.petsUrl, pet, this.httpOptions).pipe(
      tap((updatedPet: Pet) =>
        this.log(
          `update your pet, id=${updatedPet.id} with name of ${updatedPet.name} and type of ${updatedPet.type}`
        )
      ),
      catchError(this.handleError<Pet>('updatePet'))
    )
  }

  //DELETE PET
  deletePet(id: number): Observable<Pet> {
    const url = `${this.petsUrl}/${id}`

    return this.http.delete<Pet>(url, this.httpOptions).pipe(
      tap((_) => this.log(`You delete pet with id of ${id}`)),
      catchError(this.handleError<Pet>('deletePet'))
    )
  }

  //SEARCH PET
  searchPets(term: string): Observable<Pet[]> {
    if (!term.trim()) {
      return of([])
    }

    return this.http.get<Pet[]>(`${this.petsUrl}/?name=${term}`).pipe(
      tap((searchedList) =>
        searchedList.length
          ? this.log(`Search result matching "${term}"`)
          : this.log(`No pet matching "${term}`)
      ),
      catchError(this.handleError<Pet[]>('searchPet', []))
    )
  }
}

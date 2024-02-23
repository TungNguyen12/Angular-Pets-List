import { Component, OnInit } from '@angular/core'
import { Observable, Subject } from 'rxjs'

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'

import { Pet } from '../pet'
import { PetService } from '../pet.service'
import { RouterLink } from '@angular/router'
import { AsyncPipe, NgFor } from '@angular/common'

@Component({
  selector: 'app-pet-search',
  standalone: true,
  imports: [RouterLink, AsyncPipe, NgFor],
  templateUrl: './pet-search.component.html',
  styleUrl: './pet-search.component.css',
})
export class PetSearchComponent implements OnInit {
  pets$!: Observable<Pet[]>

  private searchTerms = new Subject<string>()

  constructor(private petService: PetService) {}

  //Push a search term into the observable stream
  searchPets(term: string): void {
    this.searchTerms.next(term)
  }

  ngOnInit(): void {
    this.pets$ = this.searchTerms.pipe(
      // wait 400ms after each keystroke before considering the term for searching
      debounceTime(400),

      //ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term is changed
      switchMap((term: string) => this.petService.searchPets(term))
    )
  }
}

import { Component, OnInit } from '@angular/core'
import { CommonModule, NgFor, NgIf, UpperCasePipe } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { Pet } from '../pet'
import { PetService } from '../pet.service'
import { PetInfoComponent } from '../pet-info/pet-info.component'
import { MessageService } from '../message.service'

@Component({
  selector: 'app-pets',
  standalone: true,
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.css',
  imports: [
    CommonModule,
    FormsModule,
    NgFor,
    NgIf,
    UpperCasePipe,
    PetInfoComponent,
  ],
})
export class PetsComponent implements OnInit {
  selectedPet?: Pet

  pets: Pet[] = []

  constructor(
    private petService: PetService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getPets()
  }

  onSelect(pet: Pet): void {
    this.selectedPet = pet
    this.messageService.add(
      `PetsComponent: Selected pet id=${pet.id} name=${pet.name}`
    )
  }

  getPets(): void {
    this.petService.getPets().subscribe((pets) => (this.pets = pets))
  }
}

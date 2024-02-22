import { Component, OnInit } from '@angular/core'
import { CommonModule, NgFor, NgIf, UpperCasePipe } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { Pet } from '../pet'
import { PetService } from '../pet.service'
import { PetInfoComponent } from '../pet-info/pet-info.component'
import { MessageService } from '../message.service'
import { RouterLink, RouterOutlet } from '@angular/router'

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
    RouterLink,
    RouterOutlet,
  ],
})
export class PetsComponent implements OnInit {
  pets: Pet[] = []

  constructor(private petService: PetService) {}

  ngOnInit(): void {
    this.getPets()
  }

  getPets(): void {
    this.petService.getPets().subscribe((pets) => (this.pets = pets))
  }
}

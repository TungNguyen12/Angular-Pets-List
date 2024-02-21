import { Component } from '@angular/core'
import { Pet } from '../pet'
import { CommonModule, NgFor, NgIf, UpperCasePipe } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { PETS } from '../pet-list'
import { PetInfoComponent } from '../pet-info/pet-info.component'

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
export class PetsComponent {
  pets = PETS

  selectedPet?: Pet
  onSelect(pet: Pet): void {
    this.selectedPet = pet
  }
}

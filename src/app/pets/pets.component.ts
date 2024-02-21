import { Component } from '@angular/core'
import { Pet } from '../pet'
import { CommonModule, NgFor, NgIf, UpperCasePipe } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { PETS } from '../pet-list'

@Component({
  selector: 'app-pets',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor, NgIf, UpperCasePipe],
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.css',
})
export class PetsComponent {
  pets = PETS

  selectedPet?: Pet
  onSelect(pet: Pet): void {
    this.selectedPet = pet
  }
}

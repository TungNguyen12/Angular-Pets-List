import { Component, Input } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Pet } from '../pet'
import { NgIf, UpperCasePipe } from '@angular/common'

@Component({
  selector: 'app-pet-info',
  standalone: true,
  imports: [FormsModule, UpperCasePipe, NgIf],
  templateUrl: './pet-info.component.html',
  styleUrl: './pet-info.component.css',
})
export class PetInfoComponent {
  @Input() pet?: Pet
}

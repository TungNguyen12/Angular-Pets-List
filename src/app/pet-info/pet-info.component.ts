import { Component, Input } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { NgIf, UpperCasePipe } from '@angular/common'
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'

import { Pet } from '../pet'
import { PetService } from '../pet.service'

@Component({
  selector: 'app-pet-info',
  standalone: true,
  imports: [FormsModule, UpperCasePipe, NgIf],
  templateUrl: './pet-info.component.html',
  styleUrl: './pet-info.component.css',
})
export class PetInfoComponent {
  pet: Pet | undefined

  constructor(
    private route: ActivatedRoute,
    private petService: PetService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getOnePet()
  }

  getOnePet(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.petService.getOnePet(id).subscribe((pet) => (this.pet = pet))
  }

  goBack(): void {
    this.location.back()
  }
}

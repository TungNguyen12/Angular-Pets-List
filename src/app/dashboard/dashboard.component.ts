import { NgFor } from '@angular/common'
import { Component } from '@angular/core'
import { Pet } from '../pet'
import { PetService } from '../pet.service'
import { RouterLink, RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor, RouterOutlet, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  pets: Pet[] = []
  constructor(private petService: PetService) {}

  getPets(): void {
    this.petService
      .getPets()
      .subscribe((pets) => (this.pets = pets.slice(0, 5)))
  }

  ngOnInit(): void {
    this.getPets()
  }
}

import { Routes } from '@angular/router'
import { PetsComponent } from './pets/pets.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { PetInfoComponent } from './pet-info/pet-info.component'

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: PetInfoComponent },
  { path: 'pets', component: PetsComponent },
]

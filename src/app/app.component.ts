import { Component } from '@angular/core'
import { RouterModule, RouterOutlet } from '@angular/router'
import { PetsComponent } from './pets/pets.component'
import { MessagesComponent } from './messages/messages.component'

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [PetsComponent, MessagesComponent, RouterOutlet, RouterModule],
})
export class AppComponent {
  title = 'My pets'
}

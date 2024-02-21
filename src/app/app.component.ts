import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PetsComponent } from "./pets/pets.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, PetsComponent]
})
export class AppComponent {
  title = 'My pets';
}

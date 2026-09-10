import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PatientMainComponent } from "./modules/patient/components/patient-main/patient-main.component";
import { SprinnerComponent } from "./modules/core/spinner/sprinner/sprinner.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PatientMainComponent, SprinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hmis-service-ui';
}

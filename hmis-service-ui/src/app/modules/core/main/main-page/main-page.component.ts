import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header/header.component';
import { FooterComponent } from '../../footer/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-page',
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}

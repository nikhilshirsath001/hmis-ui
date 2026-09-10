import { Component } from '@angular/core';
import { LoaderService } from '../../../../services/common/loader.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sprinner',
  imports: [CommonModule],
  templateUrl: './sprinner.component.html',
  styleUrl: './sprinner.component.css'
})
export class SprinnerComponent {
  constructor(public loader: LoaderService) { }

}

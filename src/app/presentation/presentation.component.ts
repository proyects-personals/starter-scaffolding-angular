import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './presentation.component.html',
})
export class Presentation {}

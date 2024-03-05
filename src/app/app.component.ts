import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TheRoutes } from './Enums/TheRoutes';
// import { TheRoutes } from '../../Enums/TheRoutes';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent{

  TheRoutes=TheRoutes;

  title = 'yunshin_templateSyntax';
}

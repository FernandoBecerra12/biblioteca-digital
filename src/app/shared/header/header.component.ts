import { Component } from '@angular/core';
import { RouterModule ,RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent { }

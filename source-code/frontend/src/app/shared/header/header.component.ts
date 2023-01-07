import { Component } from '@angular/core';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  isHome$ = this.headerService.isHome();



  constructor(private headerService: HeaderService) { }

}

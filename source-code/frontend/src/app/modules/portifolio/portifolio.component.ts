import { Component, OnInit } from '@angular/core';
import { Bio } from 'src/app/shared/models/bio';

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.scss']
})
export class PortifolioComponent{
  bio :Bio = {
    firstName : "shorouk",
    lastName : "khaled",
    about :["dd"],
    intro: ["I'm a Software Developer , I always try to improve and be of greater value.",
    "I also love Formula 1 and playing all kinds of sports"]

  }

  respOptions = [
    { viewClasses: 'd-none d-md-flex', headingClass: 'display-3', useSmallerHeadings: false },
    { viewClasses: 'd-flex d-md-none', headingClass: '', useSmallerHeadings: true }
  ];

  constructor() { 
  }
}

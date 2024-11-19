import { Component, OnInit } from '@angular/core';
import { Bio } from 'src/app/shared/models/bio';

@Component({
  selector: 'app-home',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.scss']
})
export class PortifolioComponent{
  bio :Bio = {
    firstName : "shorouk",
    lastName : "khaled",
    about :["dd"],
    intro: ["I’m a Senior Software Engineer dedicated to continuous learning and delivering impactful solutions."]

  }

  respOptions = [
    { viewClasses: 'd-none d-md-flex', headingClass: 'display-3', useSmallerHeadings: false },
    { viewClasses: 'd-flex d-md-none', headingClass: '', useSmallerHeadings: true }
  ];

  constructor() { 
  }
}

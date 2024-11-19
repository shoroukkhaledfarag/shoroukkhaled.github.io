import { Component, HostListener, Renderer2, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isHome$ = this.headerService.isHome();
  activeSection: string = 'home';
  isResponsive: boolean = window.innerWidth <= 990;
  menuOpen: boolean = false;

  constructor(
    private headerService: HeaderService,
    private renderer: Renderer2 
  ) { }

  ngOnInit(): void {
  }

  // Handle window resizing and adjust the menu visibility accordingly
  @HostListener('window:resize', [])
  onResize(): void {
    if (window.innerWidth > 990) {
      this.menuOpen = false;
    }
  }

  // Toggle menu visibility for small screens
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  // Handle scroll event to adjust header opacity and active section
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.updateActiveSection();
    this.updateHeaderOpacity();
  }

  // Determine which section is currently in view and update active section
  private updateActiveSection(): void {
    const sections = ['home', 'about', 'projects', 'contact'];
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element && this.isSectionInView(element)) {
        this.activeSection = section;
        break;
      }
    }
  }

  // Check if a section is within the viewport
  private isSectionInView(element: HTMLElement): boolean {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.top <= window.innerHeight / 2;
  }

  // Adjust header opacity based on scroll position
  private updateHeaderOpacity(): void {
    const header = document.getElementById('header');
    if (header) {
      const opacity = window.scrollY > 50 ? '0.95' : '1';
      this.renderer.setStyle(header, 'opacity', opacity);
    }
  }

  // Close menu when clicking outside of it
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const menu = document.querySelector('.side-menu');
    const button = document.querySelector('button[aria-label="Open side menu"]');
    if (this.menuOpen && menu && !menu.contains(event.target as Node) && button && !button.contains(event.target as Node)) {
      this.menuOpen = false; // Close the menu if clicked outside
    }
  }

  // Scroll to the specified section smoothly
  scrollTo(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      this.menuOpen = false; // Close the menu after scrolling
    }
  }
}

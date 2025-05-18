import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isScrolled = false;
  isMenuOpen = false;

  navItems = [
    { label: 'About', href: '#who-we-are' },
    { label: 'Services', href: '#our-services' },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'Process', href: '#development-process' },
    { label: 'Portfolio', href: '#portfolio' }
  ];

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
  }

  scrollTo(id: string) {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
    
    const element = document.querySelector(id);
    if (element) {
      const navHeight = 100; // Account for navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
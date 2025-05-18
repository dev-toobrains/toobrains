import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  companyLinks = [
    { label: 'About Us', href: '#who-we-are' },
    { label: 'Our Values', href: '#our-values' },
    { label: 'Services', href: '#our-services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Careers', href: '#' }
  ];
  
  resourceLinks = [
    { label: 'Blog', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'Documentation', href: '#' },
    { label: 'FAQ', href: '#' }
  ];
  
  legalLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' }
  ];
  
  socialLinks = [
    { icon: 'fab fa-twitter', href: '#', label: 'Twitter' },
    { icon: 'fab fa-linkedin-in', href: '#', label: 'LinkedIn' },
    { icon: 'fab fa-github', href: '#', label: 'GitHub' },
    { icon: 'fab fa-facebook-f', href: '#', label: 'Facebook' }
  ];
}
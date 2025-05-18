import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './sections/hero/hero.component';
import { WhoWeAreComponent } from './sections/who-we-are/who-we-are.component';
import { OurValuesComponent } from './sections/our-values/our-values.component';
import { OurServicesComponent } from './sections/our-services/our-services.component';
import { TechStackComponent } from './sections/tech-stack/tech-stack.component';
import { DevelopmentProcessComponent } from './sections/development-process/development-process.component';
import { InspirationComponent } from './sections/inspiration/inspiration.component';
import { PortfolioComponent } from './sections/portfolio/portfolio.component';
import { ContactComponent } from './sections/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { CursorFollowerComponent } from './components/cursor-follower/cursor-follower.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    WhoWeAreComponent,
    OurValuesComponent,
    OurServicesComponent,
    TechStackComponent,
    DevelopmentProcessComponent,
    InspirationComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    CursorFollowerComponent
  ],
  template: `
    <app-cursor-follower></app-cursor-follower>
    <app-navbar></app-navbar>
    <main>
      <app-hero></app-hero>
      <app-who-we-are></app-who-we-are>
      <app-our-values></app-our-values>
      <app-our-services></app-our-services>
      <app-tech-stack></app-tech-stack>
      <app-development-process></app-development-process>
      <app-inspiration></app-inspiration>
      <app-portfolio></app-portfolio>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>
  `
})
export class AppComponent implements OnInit, AfterViewInit {
  
  ngOnInit() {
    // Any initialization logic can go here
  }
  
  ngAfterViewInit() {
    // After view is initialized
  }
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero.component';
import { FeaturesComponent } from './components/features.component';
import { AboutComponent } from './components/about.component';
import { FeaturedMenuComponent } from './components/featured-menu.component';
import { ChefComponent } from './components/chef.component';
import { TestimonialsComponent } from './components/testimonials.component';
import { BookingComponent } from './components/booking.component';
import { MapComponent } from './components/map.component';
import { FooterComponent } from './components/footer.component';
import { NavbarComponent } from '../../layout/navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    FeaturesComponent,
    AboutComponent,
    FeaturedMenuComponent,
    ChefComponent,
    TestimonialsComponent,
    BookingComponent,
    MapComponent,
    FooterComponent,
  ],
  template: `
    <main class="bg-black text-white selection:bg-accent selection:text-white">
      <app-navbar></app-navbar>
      <app-hero></app-hero>
      <app-features></app-features>
      <app-about></app-about>
      <app-featured-menu></app-featured-menu>
      <app-chef></app-chef>
      <app-testimonials></app-testimonials>
      <app-booking></app-booking>
      <app-map></app-map>
      <app-footer></app-footer>
    </main>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class HomeComponent {}

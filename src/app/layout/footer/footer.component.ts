import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectRestaurantInfo } from '../../core/state/restaurant.selectors';
import {
  LucideAngularModule,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <footer class="bg-gray-900 text-gray-400 py-20 px-6">
      <div
        class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12"
        *ngIf="restaurant$ | async as restaurant"
      >
        <div class="col-span-1 md:col-span-1">
          <h2 class="text-white text-2xl font-bold mb-6 italic">
            {{ restaurant.name }}
          </h2>
          <p class="mb-8 leading-relaxed">
            Experience the culinary art of Italy. We bring the flavors of
            tradition to your modern table.
          </p>
          <div class="flex gap-4">
            <lucide-icon
              [name]="facebook"
              class="w-5 h-5 hover:text-amber-600 cursor-pointer"
            ></lucide-icon>
            <lucide-icon
              [name]="instagram"
              class="w-5 h-5 hover:text-amber-600 cursor-pointer"
            ></lucide-icon>
            <lucide-icon
              [name]="twitter"
              class="w-5 h-5 hover:text-amber-600 cursor-pointer"
            ></lucide-icon>
          </div>
        </div>

        <div>
          <h3
            class="text-white font-semibold mb-6 uppercase tracking-wider text-sm"
          >
            Quick Links
          </h3>
          <ul class="space-y-4">
            <li>
              <a href="#" class="hover:text-white transition-colors"
                >About Us</a
              >
            </li>
            <li>
              <a href="#menu" class="hover:text-white transition-colors"
                >Our Menu</a
              >
            </li>
            <li>
              <a href="#booking" class="hover:text-white transition-colors"
                >Book a Table</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-white transition-colors">Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <h3
            class="text-white font-semibold mb-6 uppercase tracking-wider text-sm"
          >
            Contact Info
          </h3>
          <ul class="space-y-4">
            <li class="flex items-center gap-3">
              <lucide-icon [name]="phone" class="w-4 h-4"></lucide-icon>
              {{ restaurant.contact.phone }}
            </li>
            <li class="flex items-center gap-3">
              <lucide-icon [name]="mail" class="w-4 h-4"></lucide-icon>
              {{ restaurant.contact.email }}
            </li>
            <li class="flex items-center gap-3">
              <lucide-icon [name]="mapPin" class="w-4 h-4"></lucide-icon>
              {{ restaurant.contact.address }}
            </li>
          </ul>
        </div>

        <div>
          <h3
            class="text-white font-semibold mb-6 uppercase tracking-wider text-sm"
          >
            Opening Hours
          </h3>
          <p>{{ restaurant.openingHours }}</p>
        </div>
      </div>

      <div
        class="container mx-auto border-t border-gray-800 mt-16 pt-8 text-center text-sm"
      >
        <p>
          &copy; 2026 {{ (restaurant$ | async)?.name }}. All rights reserved.
        </p>
      </div>
    </footer>
  `,
  styles: [],
})
export class FooterComponent {
  private store = inject(Store);
  restaurant$ = this.store.select(selectRestaurantInfo);

  readonly facebook = Facebook;
  readonly instagram = Instagram;
  readonly twitter = Twitter;
  readonly mail = Mail;
  readonly phone = Phone;
  readonly mapPin = MapPin;
}

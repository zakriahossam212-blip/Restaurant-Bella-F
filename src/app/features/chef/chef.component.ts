import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ChevronLeft } from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { FooterComponent } from '../home/components/footer.component';

@Component({
  selector: 'app-chef-page',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule,
    RouterLink,
    NavbarComponent,
    FooterComponent,
  ],
  template: `
    <div
      class="min-h-screen bg-black text-white font-sans selection:bg-accent selection:text-white"
    >
      <app-navbar></app-navbar>

      <!-- Inner Header -->
      <header
        class="relative pt-40 pb-20 md:pt-56 md:pb-32 bg-black overflow-hidden"
      >
        <div class="absolute inset-0 z-0 opacity-20">
          <div
            class="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10"
          ></div>
          <img
            src="https://images.unsplash.com/photo-1550966842-28a2a2b905ec?auto=format&fit=crop&q=80&w=2000"
            alt="Chef Background"
            class="w-full h-full object-cover grayscale"
          />
        </div>

        <div class="container mx-auto px-6 md:px-12 relative z-10">
          <div class="flex flex-col items-center text-center">
            <a
              routerLink="/"
              class="group flex items-center gap-2 text-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-8 hover:brightness-125 transition-all"
            >
              <lucide-icon
                [name]="chevronLeft"
                class="w-3 h-3 group-hover:-translate-x-1 transition-transform"
              ></lucide-icon>
              Back to Experience
            </a>

            <h1
              class="text-5xl sm:text-7xl md:text-9xl font-bold mb-6 tracking-tighter leading-[0.9]"
            >
              The <span class="text-accent italic font-serif">Masters</span>
            </h1>

            <p
              class="text-gray-400 text-base md:text-xl max-w-2xl mx-auto font-light leading-relaxed opacity-80"
            >
              Meet the visionaries behind our flavors. Decades of international
              experience blended with traditional heritage.
            </p>
          </div>
        </div>
        <div
          class="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"
        ></div>
      </header>

      <main class="py-20 md:py-32">
        <div class="container mx-auto px-6 md:px-12">
          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16"
          >
            <div *ngFor="let chef of chefs" class="group text-center">
              <div
                class="relative w-56 h-56 md:w-80 md:h-80 mx-auto mb-8 md:mb-10"
              >
                <div
                  class="absolute inset-0 rounded-full border border-white/10 group-hover:border-accent group-hover:scale-105 transition-all duration-700"
                ></div>
                <div
                  class="absolute inset-3 md:inset-4 rounded-full overflow-hidden grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                >
                  <img
                    [src]="chef.image"
                    [alt]="chef.name"
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3
                class="text-2xl md:text-4xl font-bold text-white mb-2 tracking-tight group-hover:text-accent transition-colors"
              >
                {{ chef.name }}
              </h3>
              <p
                class="text-accent text-[10px] md:text-sm font-bold uppercase tracking-[0.4em]"
              >
                {{ chef.title }}
              </p>
            </div>
          </div>
        </div>
      </main>

      <app-footer></app-footer>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class ChefPage {
  readonly chevronLeft = ChevronLeft;
  chefs = [
    {
      name: 'Chef Mahmoud',
      title: 'Executive Chef',
      image: 'assets/images/chef_1.svg',
    },
    {
      name: 'Ahmed Mohamed',
      title: 'Sous Chef',
      image: 'assets/images/chef_2.svg',
    },
    {
      name: 'Sara Hayat',
      title: 'Pastry Master',
      image: 'assets/images/chef_3.svg',
    },
  ];
}

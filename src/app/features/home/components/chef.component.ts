import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chef',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      id="chef"
      class="py-20 md:py-32 bg-black overflow-hidden border-b border-white/5"
    >
      <div class="container mx-auto px-6 md:px-12">
        <div class="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <h2
            class="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 tracking-tighter leading-tight"
          >
            The Culinary
            <span class="text-accent italic font-serif leading-tight"
              >Masters</span
            >
          </h2>
          <p
            class="text-gray-400 text-base md:text-lg leading-relaxed font-light"
          >
            Meet the visionaries behind our flavors. Our chefs combine decades
            of international experience with a deep love for Italian heritage.
          </p>
        </div>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16"
        >
          <div *ngFor="let chef of chefs" class="group text-center">
            <!-- Circular Image with Ring -->
            <div
              class="relative w-56 h-56 md:w-72 md:h-72 mx-auto mb-8 md:mb-10"
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

            <!-- Chef Details -->
            <h3
              class="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight group-hover:text-accent transition-colors"
            >
              {{ chef.name }}
            </h3>
            <p
              class="text-accent text-[10px] md:text-xs font-bold uppercase tracking-[0.4em]"
            >
              {{ chef.title }}
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class ChefComponent {
  chefs = [
    {
      name: 'Chef Mahmoud',
      title: 'Executive Chef',
      image: 'assets/images/chef_1.svg'
    },
    {
      name: 'Ahmed Mohamed',
      title: 'Sous Chef',
      image: 'assets/images/chef_2.svg'
    },
    {
      name: 'Sara Hayat',
      title: 'Pastry Master',
      image: 'assets/images/chef_3.svg'
    }
  ];
}

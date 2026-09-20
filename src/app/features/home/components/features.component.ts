import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 md:py-32 bg-black overflow-hidden">
      <div class="container mx-auto px-6 md:px-12">
        <div
          class="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-8"
        >
          <div class="max-w-2xl">
            <div
              class="text-accent text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-4 md:mb-6"
            >
              Welcome to BELLA
            </div>
            <h2
              class="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tighter"
            >
              Comfort and Quality<br />Redefined
            </h2>
          </div>
          <div class="hidden md:block w-32 h-[3px] bg-accent mb-4"></div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div *ngFor="let feature of features" class="group relative">
            <div
              class="aspect-[3/4] overflow-hidden rounded-xl mb-6 bg-zinc-900 border border-white/5"
            >
              <img
                [src]="feature.image"
                [alt]="feature.title"
                class="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
              />
            </div>
            <h3 class="text-xl md:text-2xl font-bold mb-3 tracking-tight">
              {{ feature.title }}
            </h3>
            <p
              class="text-gray-400 text-sm leading-relaxed max-w-xs md:max-w-[200px]"
            >
              {{ feature.desc }}
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
export class FeaturesComponent {
  features = [
    {
      title: 'Atmosphere',
      desc: 'Elegant interior design created for your maximum comfort and style.',
      image:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Exquisite Cuisine',
      desc: 'A culinary journey featuring only the finest seasonal products.',
      image:
        'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Expert Chefs',
      desc: 'Our kitchen team consists of world-class culinary masters.',
      image:
        'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Hospitality',
      desc: 'Personalized service that makes every guest feel like a VIP.',
      image:
        'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800',
    },
  ];
}

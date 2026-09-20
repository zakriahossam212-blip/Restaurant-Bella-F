import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ChevronLeft } from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { FooterComponent } from '../home/components/footer.component';

@Component({
  selector: 'app-story-page',
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
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000"
            alt="Gourmet Background"
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
              Our <span class="text-accent italic font-serif">Story</span>
            </h1>

            <p
              class="text-gray-400 text-base md:text-xl max-w-2xl mx-auto font-light leading-relaxed opacity-80"
            >
              A journey of passion, tradition, and culinary excellence spanning
              over two decades.
            </p>
          </div>
        </div>
        <div
          class="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"
        ></div>
      </header>

      <main class="py-20 md:py-32">
        <div class="container mx-auto px-6 md:px-12">
          <div class="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <div class="relative group">
              <div
                class="bg-accent/20 absolute -inset-4 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"
              ></div>
              <div
                class="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1577214459173-9c2151b06cfa?auto=format&fit=crop&q=80&w=1000"
                  alt="Chef in action"
                  class="w-full h-[400px] sm:h-[500px] md:h-[700px] object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </div>

            <div class="lg:pl-12">
              <div
                class="relative space-y-12 md:space-y-20 pl-8 md:pl-12 border-l border-white/10"
              >
                <div *ngFor="let step of timeline" class="relative group">
                  <div
                    class="absolute -left-[3rem] md:-left-16 top-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-black border-2 border-accent/30 flex items-center justify-center transition-all duration-500 group-hover:border-accent"
                  >
                    <div
                      class="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent animate-pulse"
                    ></div>
                  </div>

                  <div class="flex flex-wrap items-center gap-2 md:gap-4 mb-3">
                    <span
                      class="text-xs md:text-sm font-bold text-accent tracking-widest uppercase"
                      >{{ step.year }}</span
                    >
                    <div class="hidden sm:block h-[1px] w-8 bg-white/20"></div>
                    <span
                      class="text-[9px] md:text-xs font-semibold text-gray-500 uppercase tracking-widest"
                      >{{ step.phase }}</span
                    >
                  </div>

                  <h4
                    class="text-2xl md:text-3xl font-bold mb-3 md:mb-4 tracking-tight group-hover:text-accent transition-colors"
                  >
                    {{ step.title }}
                  </h4>
                  <p
                    class="text-gray-400 text-sm md:text-base leading-relaxed max-w-md"
                  >
                    {{ step.desc }}
                  </p>
                </div>
              </div>
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
export class StoryPage {
  readonly chevronLeft = ChevronLeft;
  timeline = [
    {
      year: '1999',
      phase: 'The Beginning',
      title: 'Humble Roots',
      desc: 'Founded with a simple vision: to bring authentic Italian flavors to the heart of the city in a sophisticated setting.',
    },
    {
      year: '2012',
      phase: 'Expansion',
      title: 'Expanding the Vision',
      desc: 'Our commitment to quality led to the growth of our kitchen and the introduction of unique seasonal ingredients.',
    },
    {
      year: '2024',
      phase: 'Today',
      title: 'The Modern Legacy',
      desc: 'Today, Bella stands as a beacon of high-class dining, continuously redefining the culinary experience.',
    },
  ];
}

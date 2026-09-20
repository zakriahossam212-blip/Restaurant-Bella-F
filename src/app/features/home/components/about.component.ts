import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      id="ourstory"
      class="py-20 md:py-32 bg-black overflow-hidden relative"
    >
      <!-- Background Text Shadow effect - Hidden on very small screens -->
      <div
        class="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 text-[10rem] sm:text-[15rem] md:text-[20rem] font-bold text-white/[0.02] whitespace-nowrap pointer-events-none select-none uppercase tracking-tighter hidden sm:block"
      >
        Heritage
      </div>

      <div class="container mx-auto px-6 md:px-12 relative z-10">
        <div class="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <!-- Large Image Section -->
          <div class="relative group order-2 lg:order-1 mt-10 lg:mt-0">
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

            <!-- Experience badge as seen in screenshot -->
            <div
              class="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-black p-4 md:p-8 rounded-xl border border-white/10 shadow-2xl animate-fade-in group-hover:border-accent transition-colors"
            >
              <div
                class="text-[8px] md:text-xs font-bold text-accent uppercase tracking-[0.3em] mb-1 md:mb-2 text-center"
              >
                Since
              </div>
              <div
                class="text-4xl md:text-6xl font-bold tracking-tighter text-white"
              >
                1999
              </div>
            </div>
          </div>

          <!-- Timeline Section -->
          <div class="lg:pl-12 order-1 lg:order-2">
            <h2
              class="text-4xl sm:text-5xl md:text-6xl font-bold mb-10 md:mb-16 leading-[1.1] tracking-tighter"
            >
              Our Journey<br />
              <span class="text-accent italic font-serif leading-tight"
                >Through Time</span
              >
            </h2>

            <!-- The Vertical Timeline from screenshot -->
            <div
              class="relative space-y-12 md:space-y-20 pl-8 md:pl-12 border-l border-white/10"
            >
              <div
                *ngFor="let step of timeline; let i = index"
                class="relative group"
              >
                <!-- Timeline Dot -->
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
export class AboutComponent {
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

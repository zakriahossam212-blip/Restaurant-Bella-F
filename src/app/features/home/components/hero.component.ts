import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ArrowRight } from 'lucide-angular';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section
      id="top"
      class="relative min-h-screen flex items-center overflow-hidden bg-black py-20"
    >
      <!-- High-Fidelity Background Image -->
      <div class="absolute inset-0 z-0">
        <div
          class="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10 md:via-black/40"
        ></div>
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=2000"
          alt="Steak on fire"
          class="w-full h-full object-cover object-right md:object-center brightness-75"
        />
      </div>

      <div class="container mx-auto px-6 md:px-12 relative z-20">
        <div class="max-w-3xl">
          <div
            class="mb-6 flex items-center gap-3 animate-fade-in text-accent uppercase text-[10px] md:text-xs font-bold tracking-[0.3em]"
          >
            <span class="w-8 md:w-10 h-[1px] bg-accent"></span>
            Book now for 20% Discount
          </div>

          <h1
            class="text-5xl sm:text-7xl md:text-8xl font-bold text-white mb-8 leading-[0.95] md:leading-[0.9] tracking-tighter"
          >
            <span
              class="block text-2xl sm:text-3xl md:text-4xl font-serif font-normal italic mb-2 tracking-normal opacity-90"
              >Skip the</span
            >
            <span class="text-accent italic">Cooking</span><br />
            Keep the Fun
          </h1>

          <p
            class="text-base md:text-lg text-gray-300 max-w-xl mb-12 leading-relaxed opacity-90"
          >
            Experience a symphony of fine menu at our luxury cafe.
            <br class="hidden md:block" />
            <span class="font-bold text-white">Bella</span> brings you an art of
            high-class dining via our <br class="hidden md:block" />
            specialties and passion.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 md:gap-6">
            <button
              class="bg-accent text-white px-8 md:px-10 py-4 md:py-5 font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:brightness-110 transition-all group rounded-xl btn-neon"
            >
              Get Started
              <lucide-icon
                [name]="arrowRight"
                class="w-5 h-5 group-hover:translate-x-1 transition-transform"
              ></lucide-icon>
            </button>
            <button
              class="border-2 border-white/30 text-white px-8 md:px-10 py-4 md:py-5 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded-xl hover:shadow-2xl hover:shadow-white/10 text-center"
            >
              Reserve Table
            </button>
          </div>
        </div>
      </div>

      <!-- Side text indicator - Hidden on Mobile -->
      <div
        class="absolute right-12 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-24 items-center"
      >
        <div class="h-24 w-[1px] bg-white/20"></div>
        <div
          class="rotate-90 text-[10px] text-white/40 font-bold uppercase tracking-[0.5em] whitespace-nowrap"
        >
          The best food experience
        </div>
        <div class="h-24 w-[1px] bg-white/20"></div>
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .animate-fade-in {
        animation: fadeIn 1s ease-out forwards;
      }
    `,
  ],
})
export class HeroComponent {
  readonly arrowRight = ArrowRight;
}

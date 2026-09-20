import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, MapPin } from 'lucide-angular';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section
      class="py-20 md:py-32 bg-black overflow-hidden relative border-t border-white/5"
    >
      <div class="container mx-auto px-6 md:px-12">
        <div class="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <!-- Stylized Map Placeholder -->
          <div class="relative group">
            <div
              class="absolute -inset-4 bg-accent/20 rounded-xl blur-3xl opacity-30 group-hover:opacity-60 transition-all duration-1000"
            ></div>
            <div
              class="relative bg-zinc-900 aspect-square rounded-xl overflow-hidden border border-white/10 flex items-center justify-center p-8 md:p-12"
            >
              <!-- Geometric abstraction of map from screenshot -->
              <div class="w-full h-full relative opacity-40">
                <div
                  class="absolute inset-0 border border-white/10 rounded-full scale-150"
                ></div>
                <div
                  class="absolute inset-0 border border-white/10 rounded-full scale-110"
                ></div>
                <div
                  class="absolute inset-0 border border-white/10 rounded-full scale-75"
                ></div>
              </div>

              <!-- Location Marker from screenshot -->
              <div
                class="absolute z-20 bg-accent p-4 md:p-6 rounded-full shadow-2xl animate-bounce"
              >
                <lucide-icon
                  [name]="pin"
                  class="w-6 h-6 md:w-8 md:h-8 text-white"
                ></lucide-icon>
              </div>

              <!-- Floating city label -->
              <div
                class="absolute bottom-12 md:bottom-20 z-10 bg-black/80 backdrop-blur-md px-6 md:px-10 py-3 md:py-5 rounded-full border border-white/10 text-white font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs whitespace-nowrap"
              >
                Culinary Place
              </div>
            </div>
          </div>

          <!-- Connect Section -->
          <div>
            <h2
              class="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 md:mb-8 tracking-tighter text-white leading-tight"
            >
              Connect with<br />
              <span class="text-accent italic font-serif leading-tight"
                >Bella</span
              >
            </h2>
            <p
              class="text-gray-400 text-base md:text-lg leading-relaxed mb-10 md:mb-12 max-w-lg font-light"
            >
              Join our community on social media to see behind-the-scenes
              content, new menu drops, and exclusive dining events.
            </p>

            <div class="flex gap-3 md:gap-4 mb-12 md:mb-16">
              <div class="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110">
                <img src="assets/images/social_1.svg" alt="Bella dining table detail" class="w-full h-full object-cover" loading="lazy">
              </div>
              <div class="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110">
                <img src="assets/images/social_2.svg" alt="Bella kitchen detail" class="w-full h-full object-cover" loading="lazy">
              </div>
              <div class="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110">
                <img src="assets/images/social_3.svg" alt="Bella wine service detail" class="w-full h-full object-cover" loading="lazy">
              </div>
            </div>

            <button
              class="bg-accent text-white px-8 md:px-10 py-4 md:py-5 font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] rounded-xl hover:brightness-110 transition-all relative group overflow-hidden btn-neon text-xs md:text-sm"
            >
              <span class="relative z-10">Start Messaging Now</span>
              <div
                class="absolute inset-x-0 bottom-0 h-0 bg-white group-hover:h-full transition-all duration-300 -z-0 opacity-10"
              ></div>
            </button>
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
export class MapComponent {
  readonly pin = MapPin;
}

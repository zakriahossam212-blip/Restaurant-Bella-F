import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer
      class="bg-zinc-950 pt-20 md:pt-32 pb-8 md:pb-12 overflow-hidden relative"
    >
      <!-- Huge Stylized Text Background -->
      <div
        class="absolute left-1/2 -bottom-16 md:-bottom-24 -translate-x-1/2 text-[25vw] md:text-[20vw] font-black text-zinc-900 italic tracking-[0.05em] uppercase pointer-events-none select-none whitespace-nowrap opacity-40"
      >
        Bella Culinary
      </div>

      <div class="container mx-auto px-6 md:px-12 relative z-10">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-20 md:mb-32"
        >
          <!-- Brand Info -->
          <div class="col-span-1">
            <div
              class="text-3xl md:text-4xl font-bold italic tracking-tighter text-white mb-6 md:mb-8"
            >
              Bella
            </div>
            <p
              class="text-gray-500 text-xs md:text-sm leading-relaxed max-w-[250px]"
            >
              Redefining high-class dining via our passion and dishes since
              1999.
            </p>
          </div>

          <!-- Explore -->
          <div>
            <h4
              class="text-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-6 md:mb-8"
            >
              Explore
            </h4>
            <ul class="space-y-4">
              <li>
                <a
                  routerLink="/"
                  fragment="top"
                  class="text-gray-400 hover:text-accent transition-colors"
                  >Home</a
                >
              </li>
              <li>
                <a
                  routerLink="/menu"
                  class="text-gray-400 hover:text-accent transition-colors"
                  >Experience Menu</a
                >
              </li>
              <li>
                <a
                  routerLink="/story"
                  class="text-gray-400 hover:text-accent transition-colors"
                  >Our Journey</a
                >
              </li>
              <li>
                <a
                  routerLink="/chef"
                  class="text-gray-400 hover:text-accent transition-colors"
                  >Legal & Privacy</a
                >
              </li>
            </ul>
          </div>

          <!-- Hours -->
          <div>
            <h4
              class="text-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-6 md:mb-8"
            >
              Hours
            </h4>
            <ul
              class="space-y-3 md:space-y-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/60"
            >
              <li class="flex justify-between">
                <span>Mon - Thu</span>
                <span class="text-white">10:00 - 22:00</span>
              </li>
              <li class="flex justify-between">
                <span>Fri - Sat</span>
                <span class="text-white">10:00 - 00:00</span>
              </li>
              <li class="flex justify-between">
                <span>Sunday</span> <span class="text-accent">Closed</span>
              </li>
            </ul>
          </div>

          <!-- Newsletter -->
          <div>
            <h4
              class="text-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-6 md:mb-8"
            >
              Subscribe
            </h4>
            <p class="text-gray-500 text-[10px] md:text-xs mb-6">
              Join our newsletter to stay updated.
            </p>
            <div class="relative">
              <input
                type="email"
                placeholder="Email Address"
                class="w-full bg-zinc-900 border-none rounded-xl py-4 px-6 text-[10px] md:text-xs text-white focus:ring-1 focus:ring-accent transition-all outline-none"
              />
              <button
                class="mt-4 w-full bg-accent text-white py-4 rounded-xl text-[10px] font-bold uppercase tracking-[0.3em] hover:brightness-110 transition-all btn-neon"
              >
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        <!-- Bottom Copyright -->
        <div
          class="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase font-bold tracking-widest text-white/20 text-center md:text-left"
        >
          <div>
            &copy; 2024 Bella Culinary Masterpiece. All rights reserved.
          </div>
          <div class="flex gap-6 md:gap-8 mt-4 md:mt-0">
            <a href="#" class="hover:text-white transition-colors"
              >Privacy Policy</a
            >
            <a href="#" class="hover:text-white transition-colors"
              >Terms of Service</a
            >
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class FooterComponent {}

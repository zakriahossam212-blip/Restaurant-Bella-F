import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectAllMenuItems } from '../../../core/state/restaurant.selectors';
import {
  LucideAngularModule,
  ChevronLeft,
  Star,
  ShoppingBag,
} from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { FooterComponent } from './footer.component';
import { NavbarComponent } from '../../../layout/navbar/navbar.component';

@Component({
  selector: 'app-full-menu',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule,
    RouterLink,
    FooterComponent,
    NavbarComponent,
  ],
  template: `
    <div
      class="min-h-screen bg-black text-white font-sans selection:bg-accent selection:text-white"
    >
      <app-navbar></app-navbar>

      <!-- Menu Hero Section -->
      <header
        class="relative pt-40 pb-20 md:pt-56 md:pb-32 bg-black overflow-hidden"
      >
        <!-- High-Fidelity Background -->
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
            <!-- Breadcrumb/Back Link -->
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
              Our <span class="text-accent italic font-serif">Catalogue</span>
            </h1>

            <p
              class="text-gray-400 text-base md:text-xl max-w-2xl mx-auto font-light leading-relaxed opacity-80"
            >
              Explore the full depth of our culinary vision. From
              heritage-inspired starters to modern signature masterpieces.
            </p>
          </div>
        </div>

        <!-- Decorative elements -->
        <div
          class="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"
        ></div>
      </header>

      <!-- Category Filter & Grid -->
      <main class="py-20 md:py-32">
        <div class="container mx-auto px-6 md:px-12">
          <!-- Categories -->
          <div class="flex flex-wrap justify-center gap-4 md:gap-8 mb-20">
            <button
              *ngFor="let cat of categories()"
              (click)="selectedCategory.set(cat)"
              [class]="
                selectedCategory() === cat
                  ? 'bg-accent text-white border-accent'
                  : 'bg-transparent text-white/40 border-white/10 hover:border-white/30'
              "
              class="px-8 py-3 rounded-full border text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-300"
            >
              {{ cat }}
            </button>
          </div>

          <!-- Product Grid -->
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12"
          >
            <div
              *ngFor="let item of filteredItems()"
              class="group relative bg-zinc-900/40 rounded-xl overflow-hidden border border-white/5 hover:border-accent/30 transition-all duration-700 hover:shadow-2xl hover:shadow-accent/5"
            >
              <div class="relative h-72 overflow-hidden">
                <img
                  [src]="item.image"
                  [alt]="item.name"
                  class="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 grayscale group-hover:grayscale-0"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"
                ></div>
                <div class="absolute top-6 left-6">
                  <span
                    class="bg-black/80 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest text-accent"
                  >
                    {{ item.category }}
                  </span>
                </div>
              </div>

              <div class="p-8 md:p-10">
                <div class="flex justify-between items-start mb-6">
                  <h3
                    class="text-2xl font-bold text-white group-hover:text-accent transition-colors"
                  >
                    {{ item.name }}
                  </h3>
                  <div class="text-xl font-bold text-accent tracking-tighter">
                    \${{ item.price }}
                  </div>
                </div>

                <p
                  class="text-gray-500 text-sm leading-relaxed mb-8 italic font-serif opacity-80 line-clamp-2"
                >
                  "{{ item.description }}"
                </p>

                <!-- Rating & Action -->
                <div
                  class="flex justify-between items-center pt-8 border-t border-white/5"
                >
                  <div class="flex gap-1 text-accent">
                    <lucide-icon
                      [name]="starIcon"
                      class="w-3 h-3 fill-accent"
                      *ngFor="let s of [1, 2, 3, 4, 5]"
                    ></lucide-icon>
                  </div>
                  <button
                    class="flex items-center gap-3 bg-accent text-white px-6 py-3 rounded-xl text-[9px] font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-lg shadow-accent/20 group/btn btn-neon"
                  >
                    <lucide-icon
                      [name]="shoppingBag"
                      class="w-4 h-4"
                    ></lucide-icon>
                    Add to Cart
                  </button>
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
      .btn-neon {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .btn-neon:hover {
        box-shadow: 0 0 20px rgba(229, 57, 53, 0.4);
        transform: translateY(-2px);
      }
    `,
  ],
})
export class FullMenuComponent {
  private store = inject(Store);
  menuItems = signal<any[]>([]);
  selectedCategory = signal('All Items');

  constructor() {
    this.store.select(selectAllMenuItems).subscribe(items => {
      this.menuItems.set(items);
    });
  }

  categories = signal([
    'All Items',
    'Starters',
    'Main Course',
    'Desserts',
    'Signature',
  ]);

  filteredItems = () => {
    const items = this.menuItems();
    if (this.selectedCategory() === 'All Items') return items;
    return items.filter(item => item.category === this.selectedCategory());
  };

  readonly chevronLeft = ChevronLeft;
  readonly starIcon = Star;
  readonly shoppingBag = ShoppingBag;
}

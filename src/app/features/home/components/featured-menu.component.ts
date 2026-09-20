import { Component, inject, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectAllMenuItems } from '../../../core/state/restaurant.selectors';
import {
  LucideAngularModule,
  ChevronLeft,
  ChevronRight,
  Star,
} from 'lucide-angular';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-featured-menu',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, RouterLink],
  animations: [
    trigger('listAnimation', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateX(50px)' }),
            stagger(100, [
              animate(
                '0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                style({ opacity: 1, transform: 'translateX(0)' })
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
  template: `
    <section
      id="menu"
      class="py-20 md:py-32 bg-black border-y border-white/5 overflow-hidden"
    >
      <div class="container mx-auto px-6 md:px-12">
        <!-- Header with Arrows -->
        <div
          class="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-8"
        >
          <div class="max-w-xl">
            <h2
              class="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 leading-[1.1] tracking-tighter"
            >
              Our
              <span class="text-accent italic font-serif leading-tight"
                >Signature</span
              ><br />
              Selection
            </h2>
            <p class="text-gray-400 text-base md:text-lg leading-relaxed">
              A curated list of our specialty dishes, prepared with the utmost
              passion and attention to every detail.
            </p>
          </div>

          <div class="flex gap-4 mb-4">
            <button
              (click)="prev()"
              [disabled]="currentIndex() === 0"
              class="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent transition-all group disabled:opacity-20 disabled:cursor-not-allowed btn-neon"
            >
              <lucide-icon
                [name]="chevronLeft"
                class="w-5 h-5 md:w-6 md:h-6"
              ></lucide-icon>
            </button>
            <button
              (click)="next()"
              [disabled]="currentIndex() + itemsPerPage >= totalItems()"
              class="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent transition-all group disabled:opacity-20 disabled:cursor-not-allowed btn-neon"
            >
              <lucide-icon
                [name]="chevronRight"
                class="w-5 h-5 md:w-6 md:h-6"
              ></lucide-icon>
            </button>
          </div>
        </div>

        <!-- The Menu Slider -->
        <div class="relative overflow-visible">
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
            [@listAnimation]="visibleItems().length"
          >
            @for (item of visibleItems(); track item.id) {
              <div
                class="group relative bg-zinc-900/50 rounded-xl overflow-hidden border border-white/5 transition-all duration-700 hover:border-accent/30 hover:bg-zinc-900 hover:shadow-2xl hover:shadow-accent/5"
              >
                <!-- Image Area -->
                <div class="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                  <img
                    [src]="item.image"
                    [alt]="item.name"
                    class="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />

                  <div
                    class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent"
                  ></div>

                  <!-- Badge -->
                  <div class="absolute top-6 right-6">
                    <span
                      class="bg-accent px-4 py-1 text-[10px] font-bold uppercase tracking-widest rounded-md text-white shadow-lg"
                    >
                      {{ item.category }}
                    </span>
                  </div>
                </div>

                <!-- Content Area -->
                <div class="p-6 md:p-10">
                  <div class="flex justify-between items-start mb-4">
                    <h3
                      class="text-2xl md:text-3xl font-bold text-white tracking-tight leading-none group-hover:text-accent transition-colors"
                    >
                      {{ item.name }}
                    </h3>
                  </div>

                  <!-- Rating Stars -->
                  <div class="flex gap-1 mb-4 text-accent">
                    <lucide-icon
                      [name]="starIcon"
                      class="w-3 h-3 fill-accent"
                      *ngFor="let s of [1, 2, 3, 4, 5]"
                    ></lucide-icon>
                  </div>
                  <p
                    class="text-gray-500 text-xs md:text-sm leading-relaxed mb-6 md:mb-8 line-clamp-2 italic font-serif"
                  >
                    "{{ item.description }}"
                  </p>

                  <div
                    class="flex justify-between items-center pt-6 md:pt-8 border-t border-white/5"
                  >
                    <div
                      class="text-2xl md:text-3xl font-bold text-accent tracking-tighter"
                    >
                      \${{ item.price | number: '1.2-2' }}
                    </div>
                    <button
                      class="bg-accent/10 px-6 md:px-8 py-2 md:py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest text-accent hover:bg-accent hover:text-white transition-all btn-neon"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>

        <!-- Dots Indicator -->
        <div class="mt-12 md:mt-16 flex justify-center gap-3">
          @for (dot of [].constructor(totalPages()); track $index) {
            <button
              (click)="currentIndex.set($index * itemsPerPage)"
              class="h-1 md:h-1.5 rounded-full transition-all duration-500"
              [class]="
                currentIndex() === $index * itemsPerPage
                  ? 'w-8 md:w-12 bg-accent'
                  : 'w-2 md:w-3 bg-white/10 hover:bg-white/30'
              "
            ></button>
          }
        </div>

        <div class="mt-16 md:mt-24 text-center">
          <a
            routerLink="/menu"
            class="inline-block text-accent text-xs md:text-sm font-bold uppercase tracking-[0.3em] border-b-2 border-accent pb-2 hover:brightness-125 transition-all outline-none"
          >
            Explore Full Menu
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      .btn-neon:disabled {
        box-shadow: none !important;
        filter: none !important;
        transform: none !important;
      }
    `,
  ],
})
export class FeaturedMenuComponent {
  private store = inject(Store);
  private menuItems = signal<any[]>([]);

  currentIndex = signal(0);
  itemsPerPage = 3;

  constructor() {
    this.store.select(selectAllMenuItems).subscribe(items => {
      this.menuItems.set(items);
    });
  }

  visibleItems = computed(() => {
    const items = this.menuItems();
    return items.slice(
      this.currentIndex(),
      this.currentIndex() + this.itemsPerPage
    );
  });

  totalItems = computed(() => this.menuItems().length);
  totalPages = computed(() => Math.ceil(this.totalItems() / this.itemsPerPage));

  next() {
    if (this.currentIndex() + this.itemsPerPage < this.totalItems()) {
      this.currentIndex.update(i => i + this.itemsPerPage);
    }
  }

  prev() {
    if (this.currentIndex() > 0) {
      this.currentIndex.update(i => i - this.itemsPerPage);
    }
  }

  readonly chevronLeft = ChevronLeft;
  readonly chevronRight = ChevronRight;
  readonly starIcon: any = Star;
}

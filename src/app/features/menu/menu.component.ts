import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import {
  selectMenu,
  selectRestaurantLoading,
} from '../../core/state/restaurant.selectors';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { LucideAngularModule, ShoppingCart } from 'lucide-angular';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, DataViewModule, TagModule, LucideAngularModule],
  template: `
    <section id="menu" class="py-24 bg-white">
      <div class="container mx-auto px-6 text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4 italic">
          Our Exquisite Menu
        </h2>
        <div class="w-20 h-1 bg-amber-600 mx-auto rounded-full"></div>
      </div>

      <div class="container mx-auto px-6">
        <p-dataView
          #dv
          [value]="(menu$ | async) || []"
          [loading]="(loading$ | async) || false"
          [rows]="6"
          [paginator]="true"
        >
          <ng-template pTemplate="list" let-items>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div
                *ngFor="let item of items"
                class="bg-white rounded-3xl overflow-hidden shadow-xl shadow-gray-200/50 border border-gray-100 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-200/20 group"
              >
                <div class="relative h-64 overflow-hidden">
                  <img
                    [src]="item.image"
                    [alt]="item.name"
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div class="absolute top-4 right-4">
                    <p-tag
                      [value]="item.category"
                      severity="secondary"
                      [style]="{
                        background: 'rgba(255,255,255,0.9)',
                        color: '#92400e',
                        'backdrop-blur': 'sm',
                      }"
                    ></p-tag>
                  </div>
                </div>
                <div class="p-8">
                  <div class="flex justify-between items-start mb-4">
                    <h3 class="text-xl font-bold text-gray-900">
                      {{ item.name }}
                    </h3>
                    <span class="text-xl font-bold text-amber-700 italic"
                      >\${{ item.price.toFixed(2) }}</span
                    >
                  </div>
                  <p class="text-gray-600 mb-6 line-clamp-2">
                    {{ item.description }}
                  </p>
                  <button
                    class="w-full flex items-center justify-center gap-2 bg-gray-50 text-gray-900 py-3 rounded-2xl font-semibold hover:bg-amber-600 hover:text-white transition-all group/btn"
                  >
                    <lucide-icon
                      [name]="shoppingCart"
                      class="w-4 h-4"
                    ></lucide-icon>
                    Add to Order
                  </button>
                </div>
              </div>
            </div>
          </ng-template>
        </p-dataView>
      </div>
    </section>
  `,
  styles: [
    `
      :host ::ng-deep .p-dataview .p-paginator {
        margin-top: 3rem;
        border: none;
        background: transparent;
      }
      :host
        ::ng-deep
        .p-paginator
        .p-paginator-pages
        .p-paginator-page.p-highlight {
        background: #d97706;
        border-color: #d97706;
        color: white;
      }
    `,
  ],
})
export class MenuComponent {
  private store = inject(Store);
  menu$ = this.store.select(selectMenu);
  loading$ = this.store.select(selectRestaurantLoading);

  readonly shoppingCart = ShoppingCart;
}

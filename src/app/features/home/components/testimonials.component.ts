import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectAllTestimonials } from '../../../core/state/restaurant.selectors';
import { LucideAngularModule, Quote, Star } from 'lucide-angular';
import { Observable } from 'rxjs';
import { Testimonial } from '../../../core/models/restaurant.model';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section
      class="py-20 md:py-32 bg-black overflow-hidden relative border-b border-white/5"
    >
      <div class="container mx-auto px-6 md:px-12">
        <!-- Section Header -->
        <div class="text-center mb-16 md:mb-24">
          <h2
            class="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 tracking-tighter leading-tight"
          >
            Guest
            <span class="text-accent italic font-serif leading-tight"
              >Reviews</span
            >
          </h2>
          <div class="flex justify-center gap-1.5 md:gap-2 text-accent mb-4">
            <lucide-icon
              [name]="star"
              class="w-3.5 h-3.5 md:w-4 md:h-4 fill-accent"
              *ngFor="let s of [1, 2, 3, 4, 5]"
            ></lucide-icon>
          </div>
        </div>

        <!-- Feedback Cards -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          <div
            *ngFor="let t of testimonials$ | async"
            class="group relative p-8 md:p-12 bg-zinc-900 border border-white/5 rounded-xl transition-all duration-700 hover:border-accent flex flex-col justify-between"
          >
            <!-- Red Quote Icon -->
            <div
              class="absolute -top-4 -left-3 md:-top-6 md:-left-4 w-10 h-10 md:w-12 md:h-12 bg-accent rounded-full flex items-center justify-center text-white shadow-xl rotate-12 group-hover:rotate-0 transition-transform"
            >
              <lucide-icon
                [name]="quote"
                class="w-4 h-4 md:w-5 md:h-5"
              ></lucide-icon>
            </div>

            <p
              class="text-base md:text-lg text-gray-300 italic font-serif leading-relaxed mb-8 md:mb-12"
            >
              "{{ t.comment }}"
            </p>

            <div
              class="flex items-center gap-4 pt-6 md:pt-8 border-t border-white/5"
            >
              <div
                class="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 ring-2 ring-white/10 group-hover:ring-accent"
              >
                <img [src]="t.avatar" class="w-full h-full object-cover" />
              </div>
              <div>
                <h4
                  class="font-bold text-white text-base md:text-lg tracking-tight"
                >
                  {{ t.name }}
                </h4>
                <p
                  class="text-accent text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] opacity-80"
                >
                  {{ t.role }}
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
export class TestimonialsComponent {
  private store = inject(Store);
  testimonials$: Observable<Testimonial[]> = this.store.select(
    selectAllTestimonials
  );

  readonly quote = Quote;
  readonly star = Star;
}

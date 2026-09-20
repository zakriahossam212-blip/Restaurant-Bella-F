import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LucideAngularModule,
  Phone,
  Mail,
  ChevronDown,
  Calendar,
  Users,
  Clock,
} from 'lucide-angular';
import { PremiumCalendarComponent } from '../../../shared/components/premium-calendar/premium-calendar.component';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, PremiumCalendarComponent],
  animations: [
    trigger('dropdownAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate(
          '200ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '150ms ease-in',
          style({ opacity: 0, transform: 'translateY(-10px)' })
        ),
      ]),
    ]),
  ],
  template: `
    <section
      id="book"
      class="py-20 md:py-32 bg-zinc-950 overflow-hidden relative"
    >
      <!-- Background Image -->
      <div class="absolute inset-0 z-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=2000"
          class="w-full h-full object-cover grayscale"
          alt="Background"
        />
      </div>

      <div class="container mx-auto px-6 md:px-12 relative z-10">
        <div class="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <!-- Text and Contact Info -->
          <div>
            <h2
              class="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tighter text-white leading-[0.9]"
            >
              Secure Your
              <span class="text-accent italic font-serif block">Seat</span>
            </h2>
            <p
              class="text-gray-400 text-base md:text-lg leading-relaxed mb-10 md:mb-12 max-w-lg"
            >
              For a private event or any special request, please contact our
              team via phone or email for personalized arrangements.
            </p>

            <div class="space-y-6 md:space-y-8">
              <div class="flex items-center gap-4 md:gap-6 group">
                <div
                  class="w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all cursor-pointer"
                >
                  <lucide-icon
                    [name]="phone"
                    class="w-5 h-5 md:w-6 md:h-6"
                  ></lucide-icon>
                </div>
                <div>
                  <div
                    class="text-[8px] md:text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-1"
                  >
                    Call Us
                  </div>
                  <div
                    class="text-lg sm:text-2xl font-bold text-white tracking-widest"
                  >
                    +1 (555) 123-4567
                  </div>
                </div>
              </div>

              <div
                class="flex items-center gap-4 md:gap-6 group text-wrap break-all"
              >
                <div
                  class="w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all cursor-pointer"
                >
                  <lucide-icon
                    [name]="mail"
                    class="w-5 h-5 md:w-6 md:h-6"
                  ></lucide-icon>
                </div>
                <div>
                  <div
                    class="text-[8px] md:text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-1"
                  >
                    Email
                  </div>
                  <div
                    class="text-lg sm:text-2xl font-bold text-white tracking-widest underline decoration-accent underline-offset-4 md:underline-offset-8"
                  >
                    hello&#64;bella.com
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Refined Booking Form -->
          <div
            class="bg-black/80 backdrop-blur-xl p-6 md:p-12 rounded-xl border border-white/5 shadow-2xl"
          >
            <form
              class="space-y-6 md:space-y-8"
              (submit)="$event.preventDefault()"
            >
              <!-- Name Inputs -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div class="space-y-1">
                  <label class="premium-label">First Name</label>
                  <input type="text" placeholder="John" class="premium-input" />
                </div>
                <div class="space-y-1">
                  <label class="premium-label">Last Name</label>
                  <input type="text" placeholder="Doe" class="premium-input" />
                </div>
              </div>

              <!-- Selection Inputs -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <!-- Guests Dropdown -->
                <div class="relative">
                  <label class="premium-label">Guests</label>
                  <div
                    (click)="toggleDropdown('guests')"
                    class="premium-dropdown-trigger"
                    [class.active]="activeDropdown === 'guests'"
                  >
                    <span class="flex items-center gap-2">
                      <lucide-icon
                        [name]="users"
                        class="w-4 h-4 text-accent"
                      ></lucide-icon>
                      {{ selectedGuests }}
                    </span>
                    <lucide-icon
                      [name]="chevronDown"
                      class="w-4 h-4 opacity-40 transition-transform"
                      [class.rotate-180]="activeDropdown === 'guests'"
                    ></lucide-icon>
                  </div>

                  @if (activeDropdown === 'guests') {
                    <div [@dropdownAnimation] class="premium-dropdown-panel">
                      <div class="max-h-60 overflow-y-auto custom-scrollbar">
                        @for (opt of guestOptions; track opt) {
                          <div
                            (click)="
                              $event.stopPropagation();
                              selectOption('guests', opt)
                            "
                            class="premium-dropdown-item"
                          >
                            {{ opt }}
                          </div>
                        }
                      </div>
                    </div>
                  }
                </div>

                <!-- Date Picker Dropdown -->
                <div class="relative">
                  <label class="premium-label">Date</label>
                  <div
                    (click)="toggleDropdown('calendar')"
                    class="premium-dropdown-trigger"
                    [class.active]="activeDropdown === 'calendar'"
                  >
                    <span class="flex items-center gap-2">
                      <lucide-icon
                        [name]="calendar"
                        class="w-4 h-4 text-accent"
                      ></lucide-icon>
                      {{ formattedDate }}
                    </span>
                    <lucide-icon
                      [name]="chevronDown"
                      class="w-4 h-4 opacity-40 transition-transform"
                      [class.rotate-180]="activeDropdown === 'calendar'"
                    ></lucide-icon>
                  </div>

                  @if (activeDropdown === 'calendar') {
                    <app-premium-calendar
                      [selectedDate]="selectedDate"
                      (dateChange)="onSharedDateSelect($event)"
                    >
                    </app-premium-calendar>
                  }
                </div>

                <!-- Time Slot Dropdown -->
                <div class="relative">
                  <label class="premium-label">Time Slot</label>
                  <div
                    (click)="toggleDropdown('time')"
                    class="premium-dropdown-trigger"
                    [class.active]="activeDropdown === 'time'"
                  >
                    <span class="flex items-center gap-2">
                      <lucide-icon
                        [name]="clock"
                        class="w-4 h-4 text-accent"
                      ></lucide-icon>
                      {{ selectedTime }}
                    </span>
                    <lucide-icon
                      [name]="chevronDown"
                      class="w-4 h-4 opacity-40 transition-transform"
                      [class.rotate-180]="activeDropdown === 'time'"
                    ></lucide-icon>
                  </div>

                  @if (activeDropdown === 'time') {
                    <div [@dropdownAnimation] class="premium-dropdown-panel">
                      <div class="max-h-60 overflow-y-auto custom-scrollbar">
                        @for (opt of timeOptions; track opt) {
                          <div
                            (click)="
                              $event.stopPropagation();
                              selectOption('time', opt)
                            "
                            class="premium-dropdown-item"
                          >
                            {{ opt }}
                          </div>
                        }
                      </div>
                    </div>
                  }
                </div>
              </div>

              <button
                type="button"
                class="w-full bg-accent text-white py-4 md:py-6 rounded-xl font-bold uppercase tracking-[0.4em] transition-all shadow-xl shadow-accent/20 btn-neon text-xs md:text-sm"
              >
                Book Your Table
              </button>
            </form>
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
export class BookingComponent implements OnInit {
  // Icons
  readonly phone = Phone;
  readonly mail = Mail;
  readonly chevronDown = ChevronDown;
  readonly calendar = Calendar;
  readonly users = Users;
  readonly clock = Clock;

  // Dropdown States
  activeDropdown: 'guests' | 'time' | 'calendar' | null = null;

  // Options
  guestOptions = [
    '01 Person',
    '02 Persons',
    '03 Persons',
    '04 Persons',
    '05 Persons',
    '06+ Persons',
    'Private Event',
  ];
  timeOptions = [
    '18:00 PM',
    '18:30 PM',
    '19:00 PM',
    '19:30 PM',
    '20:00 PM',
    '20:30 PM',
    '21:00 PM',
    '21:30 PM',
    '22:00 PM',
  ];

  // Selection
  selectedGuests = '02 Persons';
  selectedTime = '19:00 PM';
  selectedDate: Date = new Date();

  get formattedDate(): string {
    return this.selectedDate.toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  }

  ngOnInit() {}

  toggleDropdown(type: 'guests' | 'time' | 'calendar') {
    this.activeDropdown = this.activeDropdown === type ? null : type;
  }

  selectOption(type: 'guests' | 'time', value: string) {
    if (type === 'guests') this.selectedGuests = value;
    else if (type === 'time') this.selectedTime = value;
    this.activeDropdown = null;
  }

  onSharedDateSelect(date: Date) {
    this.selectedDate = date;
    this.activeDropdown = null;
  }
}

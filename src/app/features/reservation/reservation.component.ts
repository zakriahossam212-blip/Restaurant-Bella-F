import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { FooterComponent } from '../home/components/footer.component';
import {
  animate,
  style,
  transition,
  trigger,
  query,
  stagger,
} from '@angular/animations';
import { PremiumCalendarComponent } from '../../shared/components/premium-calendar/premium-calendar.component';
import {
  LucideAngularModule,
  ChevronLeft,
  Calendar as CalendarIcon,
  Users,
  Clock,
  Ticket,
  CheckCircle2,
  ChevronDown,
} from 'lucide-angular';

interface BookingRecord {
  id: string;
  name: string;
  date: Date;
  time: string;
  guests: number;
  queueNumber: number;
  status: 'In Review' | 'Confirmed';
  timestamp: Date;
}

@Component({
  selector: 'app-reservation-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    TagModule,
    LucideAngularModule,
    RouterLink,
    NavbarComponent,
    FooterComponent,
    PremiumCalendarComponent,
  ],
  animations: [
    trigger('staggerList', [
      transition(':enter', [
        query(
          '.queue-item',
          [
            style({ opacity: 0, transform: 'translateY(20px)' }),
            stagger(100, [
              animate(
                '500s ease-out',
                style({ opacity: 1, transform: 'translateY(0)' })
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
    trigger('newItem', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
    ]),
  ],
  template: `
    <div
      class="min-h-screen bg-black text-white font-sans selection:bg-accent selection:text-white pb-20"
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
            src="https://images.unsplash.com/photo-1550966842-28a2a2b905ec?auto=format&fit=crop&q=80&w=2000"
            alt="Reservation Background"
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
              Book Your <span class="text-accent italic font-serif">Table</span>
            </h1>

            <p
              class="text-gray-400 text-base md:text-xl max-w-2xl mx-auto font-light leading-relaxed opacity-80"
            >
              Secure your spot for an unforgettable evening of taste and
              tradition.
            </p>
          </div>
        </div>
        <div
          class="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"
        ></div>
      </header>

      <main class="py-20 md:py-32">
        <div class="container mx-auto px-6 md:px-12">
          <div class="max-w-5xl mx-auto space-y-24">
            <!-- Reservation Form Section -->
            <div
              class="bg-zinc-900/50 rounded-[3rem] shadow-2xl overflow-hidden border border-white/5 p-8 md:p-16"
            >
              <h2
                class="text-3xl font-bold mb-12 tracking-tight flex items-center gap-4"
              >
                <lucide-icon
                  [name]="calendarIcon"
                  class="text-accent w-8 h-8"
                ></lucide-icon>
                New Reservation
              </h2>

              <form
                [formGroup]="bookingForm"
                (ngSubmit)="onSubmit()"
                class="space-y-8 md:space-y-12"
              >
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  <div class="space-y-1">
                    <label class="premium-label">Full Name</label>
                    <input
                      type="text"
                      pInputText
                      formControlName="name"
                      placeholder="John Doe"
                      class="premium-input"
                    />
                  </div>
                  <div class="space-y-1">
                    <label class="premium-label">Email Address</label>
                    <input
                      type="email"
                      pInputText
                      formControlName="email"
                      placeholder="john@example.com"
                      class="premium-input"
                    />
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                  <div class="space-y-1 relative">
                    <label class="premium-label">Date</label>
                    <div
                      (click)="toggleCalendar()"
                      class="premium-dropdown-trigger"
                      [class.active]="showCalendar"
                    >
                      <span class="flex items-center gap-2">
                        <lucide-icon
                          [name]="calendarIcon"
                          class="w-4 h-4 text-accent"
                        ></lucide-icon>
                        {{ formattedDate }}
                      </span>
                      <lucide-icon
                        [name]="chevronDown"
                        class="w-4 h-4 opacity-40 transition-transform"
                        [class.rotate-180]="showCalendar"
                      ></lucide-icon>
                    </div>
                    @if (showCalendar) {
                      <app-premium-calendar
                        [selectedDate]="bookingForm.get('date')?.value || today"
                        (dateChange)="onDateSelect($event)"
                      >
                      </app-premium-calendar>
                    }
                  </div>
                  <div class="space-y-1">
                    <label class="premium-label">Number of Guests</label>
                    <p-dropdown
                      [options]="guestOptions"
                      formControlName="guests"
                      placeholder="Select Guests"
                      styleClass="premium-dropdown-trigger"
                    ></p-dropdown>
                  </div>
                  <div class="space-y-1">
                    <label class="premium-label">Preferred Time</label>
                    <p-dropdown
                      [options]="timeOptions"
                      formControlName="time"
                      placeholder="Select Time"
                      styleClass="premium-dropdown-trigger"
                    ></p-dropdown>
                  </div>
                </div>

                <div class="space-y-1">
                  <label class="premium-label">Special Requests</label>
                  <textarea
                    pInputText
                    formControlName="requests"
                    rows="4"
                    placeholder="Any allergic reactions or special occasions?"
                    class="premium-input"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  [disabled]="bookingForm.invalid"
                  class="w-full bg-accent text-white py-6 rounded-3xl text-xs font-bold uppercase tracking-[0.4em] hover:brightness-110 transition-all shadow-xl shadow-accent/20 disabled:opacity-50 btn-neon"
                >
                  Place Reservation
                </button>
              </form>
            </div>

            <!-- Booking Queue Section -->
            @if (bookings().length > 0) {
              <div class="space-y-12" [@staggerList]>
                <div
                  class="flex items-end justify-between border-b border-white/10 pb-6"
                >
                  <div>
                    <h2 class="text-3xl font-bold tracking-tight mb-2">
                      Live Queue Status
                    </h2>
                    <p class="text-gray-500 text-sm font-light">
                      Trace your booking progress in real-time.
                    </p>
                  </div>
                  <div class="text-right">
                    <span
                      class="text-accent text-xs font-bold uppercase tracking-[0.2em]"
                      >Total Queue</span
                    >
                    <div class="text-4xl font-bold tracking-tighter">
                      {{ bookings().length }}
                    </div>
                  </div>
                </div>

                @for (booking of bookings(); track booking.id; let i = $index) {
                  <div
                    class="queue-item bg-zinc-900/30 border border-white/5 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 transition-all hover:bg-zinc-900/50 hover:border-accent/20"
                    [@newItem]
                  >
                    <!-- Ticket # -->
                    <div
                      class="flex-shrink-0 w-24 h-24 rounded-2xl bg-black border border-white/10 flex flex-col items-center justify-center"
                    >
                      <lucide-icon
                        [name]="ticketIcon"
                        class="text-accent/40 w-5 h-5 mb-1"
                      ></lucide-icon>
                      <span
                        class="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1"
                        >Ticket</span
                      >
                      <span
                        class="text-2xl font-bold tracking-tighter text-white"
                        >#{{ booking.queueNumber }}</span
                      >
                    </div>

                    <!-- Info -->
                    <div class="flex-grow space-y-2 text-center md:text-left">
                      <div
                        class="flex items-center justify-center md:justify-start gap-4 mb-2"
                      >
                        <h3 class="text-2xl font-bold tracking-tight">
                          {{ booking.name }}
                        </h3>
                        <p-tag
                          [value]="booking.status"
                          [severity]="
                            booking.status === 'Confirmed' ? 'success' : 'warn'
                          "
                          [rounded]="true"
                          class="status-tag"
                        ></p-tag>
                      </div>
                      <div
                        class="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm text-white/60"
                      >
                        <span class="flex items-center gap-2"
                          ><lucide-icon
                            [name]="calendarIcon"
                            class="w-4 h-4 text-accent/60"
                          ></lucide-icon>
                          {{ booking.date | date: 'MMM d, y' }}</span
                        >
                        <span class="flex items-center gap-2"
                          ><lucide-icon
                            [name]="clockIcon"
                            class="w-4 h-4 text-accent/60"
                          ></lucide-icon>
                          {{ booking.time }}</span
                        >
                        <span class="flex items-center gap-2"
                          ><lucide-icon
                            [name]="usersIcon"
                            class="w-4 h-4 text-accent/60"
                          ></lucide-icon>
                          {{ booking.guests }} Guests</span
                        >
                      </div>
                    </div>

                    <!-- Queue Pos -->
                    <div
                      class="flex-shrink-0 text-center md:text-right border-t md:border-t-0 md:border-l border-white/5 pt-6 md:pt-0 md:pl-12"
                    >
                      <div
                        class="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-1"
                      >
                        Queue Position
                      </div>
                      <div
                        class="text-5xl font-bold tracking-tighter text-white"
                      >
                        {{ i + 1 }}
                      </div>
                    </div>
                  </div>
                }
              </div>
            }
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
      :host ::ng-deep .premium-dropdown-trigger .p-inputtext,
      :host ::ng-deep .premium-dropdown-trigger .p-inputtext {
        background: transparent;
        border: none;
        color: white;
        padding-left: 0;
        font-size: 0.875rem;
      }
      :host ::ng-deep .p-dropdown-panel {
        background-color: #09090b !important;
        border: 1px solid rgba(255, 255, 255, 0.1) !important;
        box-shadow: 0 25px 50px -12px rgba(229, 57, 53, 0.1) !important;
      }
      :host ::ng-deep .p-dropdown-item {
        color: rgba(255, 255, 255, 0.8) !important;
        padding: 0.75rem 1.5rem !important;
        font-family: 'Playfair Display', serif;
        font-style: italic;
      }
      :host ::ng-deep .p-dropdown-item:hover {
        background-color: var(--accent-red) !important;
        color: white !important;
      }
      :host ::ng-deep .p-dropdown-trigger {
        color: rgba(255, 255, 255, 0.4) !important;
      }
      :host ::ng-deep .status-tag .p-tag {
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        font-weight: 700;
        background: rgba(255, 255, 255, 0.05);
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.1);
      }
      :host ::ng-deep .status-tag .p-tag-success {
        background: rgba(34, 197, 94, 0.1);
        color: #4ade80;
        border-color: rgba(34, 197, 94, 0.2);
      }
    `,
  ],
})
export class ReservationPage {
  private fb = inject(FormBuilder);
  bookingForm;
  today = new Date();
  readonly chevronLeft = ChevronLeft;
  readonly calendarIcon = CalendarIcon;
  readonly clockIcon = Clock;
  readonly usersIcon = Users;
  readonly ticketIcon = Ticket;
  readonly checkIcon = CheckCircle2;
  readonly chevronDown = ChevronDown;

  // UI state
  showCalendar = false;

  get formattedDate(): string {
    const date = this.bookingForm?.get('date')?.value;
    if (!date) return 'Select Date';
    return new Date(date).toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  }

  toggleCalendar() {
    this.showCalendar = !this.showCalendar;
  }

  onDateSelect(date: Date) {
    this.bookingForm.patchValue({ date: date });
    this.showCalendar = false;
  }

  // Bookings queue state
  bookings = signal<BookingRecord[]>([]);
  private nextTicketNumber = 101;

  guestOptions = [
    { label: '1 Guest', value: 1 },
    { label: '2 Guests', value: 2 },
    { label: '3 Guests', value: 3 },
    { label: '4 Guests', value: 4 },
    { label: '5 Guests', value: 5 },
    { label: '6+ Guests', value: 6 },
  ];

  timeOptions = [
    { label: '5:00 PM', value: '5:00 PM' },
    { label: '5:30 PM', value: '5:30 PM' },
    { label: '6:00 PM', value: '6:00 PM' },
    { label: '6:30 PM', value: '6:30 PM' },
    { label: '7:00 PM', value: '7:00 PM' },
    { label: '7:30 PM', value: '7:30 PM' },
    { label: '8:00 PM', value: '8:00 PM' },
    { label: '8:30 PM', value: '8:30 PM' },
    { label: '9:00 PM', value: '9:00 PM' },
    { label: '9:30 PM', value: '9:30 PM' },
  ];

  constructor() {
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      date: [this.today as Date | null, Validators.required],
      time: ['19:00 PM' as string | null, Validators.required],
      guests: [2 as number | null, Validators.required],
      requests: [''],
    });
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      const val = this.bookingForm.getRawValue();
      const newBooking: BookingRecord = {
        id: Math.random().toString(36).substring(2, 9),
        name: val.name ?? '',
        date: val.date ? (val.date as Date) : new Date(),
        time: val.time ?? '',
        guests: val.guests ?? 2,
        queueNumber: this.nextTicketNumber++,
        status: 'In Review',
        timestamp: new Date(),
      };

      // Add to queue (newest on top or bottom? User said "inner this queue", usually newest on top or bottom list)
      this.bookings.update(current => [...current, newBooking]);

      // Reset form
      this.bookingForm.reset({ guests: 2 });

      // Simulate confirmation after 5 seconds
      setTimeout(() => {
        this.bookings.update(current =>
          current.map(b =>
            b.id === newBooking.id ? { ...b, status: 'Confirmed' as const } : b
          )
        );
      }, 5000);
    }
  }
}

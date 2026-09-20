import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { LucideAngularModule, Calendar, Users, Clock } from 'lucide-angular';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    InputTextModule,
    ButtonModule,
    LucideAngularModule,
  ],
  template: `
    <section id="booking" class="py-24 bg-slate-50 overflow-hidden relative">
      <!-- Background accents -->
      <div
        class="absolute -top-24 -right-24 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
      ></div>

      <div class="container mx-auto px-6 relative z-10">
        <div
          class="max-w-4xl mx-auto flex flex-col lg:flex-row bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100"
        >
          <!-- Image Section -->
          <div class="lg:w-2/5 relative min-h-[300px]">
            <img
              src="https://images.unsplash.com/photo-1550966842-28a2a2b905ec?auto=format&fit=crop&q=80&w=1000"
              alt="Restaurant Ambiance"
              class="absolute inset-0 w-full h-full object-cover"
            />
            <div
              class="absolute inset-0 bg-black/40 flex items-center justify-center p-8 text-center"
            >
              <div>
                <h3 class="text-3xl font-bold text-white mb-4 italic">
                  Reserved for Perfection
                </h3>
                <p class="text-white/80">
                  Join us for an unforgettable evening of taste and tradition.
                </p>
              </div>
            </div>
          </div>

          <!-- Form Section -->
          <div class="lg:w-3/5 p-12 lg:p-16">
            <h2
              class="text-4xl font-bold text-gray-900 mb-8 italic text-center lg:text-left"
            >
              Book Your Table
            </h2>

            <form
              [formGroup]="bookingForm"
              (ngSubmit)="onSubmit()"
              class="space-y-6"
            >
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="flex flex-col gap-2">
                  <label class="text-sm font-semibold text-gray-700 ml-1"
                    >Full Name</label
                  >
                  <input
                    type="text"
                    pInputText
                    formControlName="name"
                    placeholder="John Doe"
                    class="w-full p-4 rounded-2xl border-gray-200"
                  />
                </div>
                <div class="flex flex-col gap-2">
                  <label class="text-sm font-semibold text-gray-700 ml-1"
                    >Email Address</label
                  >
                  <input
                    type="email"
                    pInputText
                    formControlName="email"
                    placeholder="john@example.com"
                    class="w-full p-4 rounded-2xl border-gray-200"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="flex flex-col gap-2">
                  <label class="text-sm font-semibold text-gray-700 ml-1"
                    >Date</label
                  >
                  <p-calendar
                    formControlName="date"
                    [showIcon]="true"
                    [minDate]="today"
                    placeholder="Select Date"
                    styleClass="w-full custom-calendar"
                  ></p-calendar>
                </div>
                <div class="flex flex-col gap-2">
                  <label class="text-sm font-semibold text-gray-700 ml-1"
                    >Number of Guests</label
                  >
                  <input
                    type="number"
                    pInputText
                    formControlName="guests"
                    placeholder="2"
                    class="w-full p-4 rounded-2xl border-gray-200"
                  />
                </div>
              </div>

              <div class="flex flex-col gap-2">
                <label class="text-sm font-semibold text-gray-700 ml-1"
                  >Special Requests</label
                >
                <textarea
                  pInputTextarea
                  formControlName="requests"
                  rows="3"
                  placeholder="Any allergic reactions or special occasions?"
                  class="w-full p-4 rounded-2xl border-gray-200"
                ></textarea>
              </div>

              <button
                type="submit"
                [disabled]="bookingForm.invalid"
                class="w-full bg-amber-600 text-white py-5 rounded-3xl text-lg font-bold hover:bg-amber-700 transition-all shadow-xl shadow-amber-600/30 disabled:opacity-70 disabled:cursor-not-allowed active:scale-95 shadow-lg"
              >
                Confirm Reservation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      :host ::ng-deep .p-calendar {
        width: 100%;
      }
      :host ::ng-deep .p-inputtext {
        padding: 1rem 1.5rem;
        border-radius: 1rem;
        border-color: #e5e7eb;
        width: 100%;
      }
      :host ::ng-deep .p-inputtext:focus {
        border-color: #d97706;
        box-shadow: 0 0 0 2px rgba(217, 119, 6, 0.1);
      }
      :host ::ng-deep .custom-calendar .p-inputtext {
        border-radius: 1rem;
      }
    `,
  ],
})
export class BookingComponent {
  bookingForm;
  today = new Date();

  constructor(private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      date: [null, Validators.required],
      guests: [2, [Validators.required, Validators.min(1)]],
      requests: [''],
    });
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      console.log('Booking submitted:', this.bookingForm.value);
      alert('Thank you for your reservation! We will contact you shortly.');
      this.bookingForm.reset({ guests: 2 });
    }
  }
}

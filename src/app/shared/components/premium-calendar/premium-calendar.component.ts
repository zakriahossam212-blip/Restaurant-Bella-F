import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LucideAngularModule,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from 'lucide-angular';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-premium-calendar',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
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
    <div class="premium-calendar-panel" (click)="$event.stopPropagation()">
      <!-- Calendar Header -->
      <div class="flex justify-between items-center mb-6 sm:mb-8">
        <button
          type="button"
          (click)="prevMonth()"
          class="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center hover:bg-accent transition-all active:scale-90"
        >
          <lucide-icon
            [name]="chevronLeft"
            class="w-5 h-5 text-white"
          ></lucide-icon>
        </button>

        <div class="flex gap-2 items-center">
          <!-- Month Selection -->
          <div class="relative group">
            <button
              type="button"
              (click)="toggleCalendarSelector('month')"
              class="font-serif italic text-xl sm:text-2xl text-white hover:text-accent transition-colors flex items-center gap-1"
            >
              {{ currentMonthName }}
              <lucide-icon
                [name]="chevronDown"
                class="w-3 h-3 opacity-30"
              ></lucide-icon>
            </button>

            @if (calendarSelector === 'month') {
              <div
                [@dropdownAnimation]
                class="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-40 bg-zinc-900 border border-white/10 rounded-xl py-2 z-50 shadow-2xl max-h-64 overflow-y-auto custom-scrollbar"
              >
                @for (month of months; track month; let i = $index) {
                  <div
                    (click)="selectMonth(i)"
                    class="px-6 py-2 text-sm text-center hover:bg-accent hover:text-white transition-colors cursor-pointer"
                    [class.text-accent]="i === viewDate.getMonth()"
                  >
                    {{ month }}
                  </div>
                }
              </div>
            }
          </div>

          <!-- Year Selection -->
          <div class="relative group">
            <button
              type="button"
              (click)="toggleCalendarSelector('year')"
              class="font-serif italic text-xl sm:text-2xl text-white/40 hover:text-accent transition-colors flex items-center gap-1"
            >
              {{ currentYear }}
              <lucide-icon
                [name]="chevronDown"
                class="w-3 h-3 opacity-30"
              ></lucide-icon>
            </button>

            @if (calendarSelector === 'year') {
              <div
                [@dropdownAnimation]
                class="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-32 bg-zinc-900 border border-white/10 rounded-xl py-2 z-50 shadow-2xl max-h-64 overflow-y-auto custom-scrollbar"
              >
                @for (year of yearOptions; track year) {
                  <div
                    (click)="selectYear(year)"
                    class="px-6 py-2 text-sm text-center hover:bg-accent hover:text-white transition-colors cursor-pointer"
                    [class.text-accent]="year === currentYear"
                  >
                    {{ year }}
                  </div>
                }
              </div>
            }
          </div>
        </div>

        <button
          type="button"
          (click)="nextMonth()"
          class="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center hover:bg-accent transition-all active:scale-90"
        >
          <lucide-icon
            [name]="chevronRight"
            class="w-5 h-5 text-white"
          ></lucide-icon>
        </button>
      </div>

      <!-- Calendar Grid -->
      <div
        class="grid grid-cols-7 gap-2 sm:gap-3 text-center text-[8px] sm:text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-4 sm:mb-6"
      >
        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span
        ><span>Fri</span><span>Sat</span><span>Sun</span>
      </div>

      <div class="grid grid-cols-7 gap-2 sm:gap-3">
        @for (day of calendarCells; track $index) {
          <div
            (click)="onDateSelect(day)"
            class="aspect-square flex items-center justify-center rounded-lg sm:rounded-xl text-sm sm:text-base transition-all cursor-pointer select-none border border-transparent"
            [ngClass]="getDayClasses(day)"
          >
            {{ day.date.getDate() }}
          </div>
        }
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        position: relative;
      }
    `,
  ],
})
export class PremiumCalendarComponent implements OnInit {
  @Input() selectedDate: Date = new Date();
  @Output() dateChange = new EventEmitter<Date>();

  readonly chevronLeft = ChevronLeft;
  readonly chevronRight = ChevronRight;
  readonly chevronDown = ChevronDown;

  calendarSelector: 'month' | 'year' | null = null;
  viewDate: Date = new Date();
  calendarCells: any[] = [];
  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  yearOptions: number[] = [];

  get currentMonthName(): string {
    return this.months[this.viewDate.getMonth()];
  }

  get currentYear(): number {
    return this.viewDate.getFullYear();
  }

  ngOnInit() {
    this.viewDate = new Date(this.selectedDate);
    const currentYear = new Date().getFullYear();
    for (let i = 0; i < 5; i++) {
      this.yearOptions.push(currentYear + i);
    }
    this.generateCalendar();
  }

  toggleCalendarSelector(type: 'month' | 'year') {
    this.calendarSelector = this.calendarSelector === type ? null : type;
  }

  selectMonth(index: number) {
    this.viewDate = new Date(this.viewDate.getFullYear(), index, 1);
    this.generateCalendar();
    this.calendarSelector = null;
  }

  selectYear(year: number) {
    this.viewDate = new Date(year, this.viewDate.getMonth(), 1);
    this.generateCalendar();
    this.calendarSelector = null;
  }

  generateCalendar() {
    const year = this.viewDate.getFullYear();
    const month = this.viewDate.getMonth();
    const firstDay = new Date(year, month, 1);

    // Start from the first Monday
    const startDate = new Date(firstDay);
    const dayOfWeek = startDate.getDay();
    const diff = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    startDate.setDate(startDate.getDate() - diff);

    const cells = [];
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);

      cells.push({
        date: new Date(date),
        current: date.getMonth() === month,
        selected: this.isSameDate(date, this.selectedDate),
      });
    }
    this.calendarCells = cells;
  }

  isSameDate(d1: Date, d2: Date) {
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  }

  prevMonth() {
    this.viewDate = new Date(
      this.viewDate.getFullYear(),
      this.viewDate.getMonth() - 1,
      1
    );
    this.generateCalendar();
  }

  nextMonth() {
    this.viewDate = new Date(
      this.viewDate.getFullYear(),
      this.viewDate.getMonth() + 1,
      1
    );
    this.generateCalendar();
  }

  onDateSelect(cell: any) {
    if (!cell.current) return;
    this.selectedDate = cell.date;
    this.dateChange.emit(this.selectedDate);
    this.generateCalendar();
  }

  getDayClasses(day: any) {
    return {
      'text-white': day.current && !day.selected,
      'text-white/20': !day.current,
      'bg-accent text-white font-bold shadow-lg shadow-accent/20': day.selected,
      'hover:bg-accent/10 hover:border-accent/30': day.current && !day.selected,
    };
  }
}

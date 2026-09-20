import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule, Menu, X } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, RouterLink, RouterLinkActive],
  template: `
    <header
      class="fixed top-0 left-0 w-full z-50 py-4 md:py-6 px-6 md:px-12 flex justify-between items-center transition-all duration-500"
      [ngClass]="{
        'bg-black': scrolled(),
        'bg-gradient-to-b from-black/50 to-transparent': !scrolled(),
      }"
    >
      <a
        routerLink="/"
        class="text-2xl md:text-3xl font-bold italic tracking-tighter text-white hover:text-accent transition-colors"
        >Bella</a
      >

      <nav
        class="hidden lg:flex items-center gap-12 text-[10px] font-bold tracking-[0.3em] text-white/60 uppercase"
      >
        <a
          routerLink="/"
          fragment="top"
          routerLinkActive="text-white border-b-2 border-accent"
          [routerLinkActiveOptions]="{ exact: true }"
          class="hover:text-white transition-all cursor-pointer pb-1"
          >Home</a
        >
        <a
          routerLink="/menu"
          routerLinkActive="text-white border-b-2 border-accent"
          class="hover:text-white transition-all cursor-pointer pb-1"
          >Menu</a
        >
        <a
          routerLink="/story"
          routerLinkActive="text-white border-b-2 border-accent"
          class="hover:text-white transition-all cursor-pointer pb-1"
          >Our Story</a
        >
        <a
          routerLink="/chef"
          routerLinkActive="text-white border-b-2 border-accent"
          class="hover:text-white transition-all cursor-pointer pb-1"
          >Chef</a
        >
        <a
          routerLink="/reservation"
          routerLinkActive="text-white border-b-2 border-accent"
          class="hover:text-white transition-all cursor-pointer pb-1"
          >Reservation</a
        >
      </nav>

      <a
        routerLink="/reservation"
        class="hidden sm:block bg-accent px-6 md:px-8 py-2 md:py-3 text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-xl hover:brightness-110 transition-all text-white shadow-lg shadow-accent/20 btn-neon"
      >
        Book a Table
      </a>

      <!-- Mobile Menu Toggle -->
      <button
        (click)="mobileMenuOpen.set(!mobileMenuOpen())"
        class="lg:hidden text-white w-10 h-10 flex flex-col justify-center items-center gap-1.5 px-2 z-50"
      >
        <span
          class="w-full h-0.5 bg-white transition-all"
          [ngClass]="{ 'rotate-45 translate-y-2': mobileMenuOpen() }"
        ></span>
        <span
          class="w-full h-0.5 bg-white transition-all"
          [ngClass]="{ 'opacity-0': mobileMenuOpen() }"
        ></span>
        <span
          class="w-full h-0.5 bg-white transition-all"
          [ngClass]="{ '-rotate-45 -translate-y-2': mobileMenuOpen() }"
        ></span>
      </button>

      <!-- Mobile Overlay -->
      <div
        *ngIf="mobileMenuOpen()"
        class="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 animate-fade-in"
      >
        <a
          (click)="mobileMenuOpen.set(false)"
          routerLink="/"
          fragment="top"
          class="text-2xl font-bold tracking-[0.2em] text-white uppercase"
          >Home</a
        >
        <a
          (click)="mobileMenuOpen.set(false)"
          routerLink="/menu"
          class="text-2xl font-bold tracking-[0.2em] text-white uppercase"
          >Menu</a
        >
        <a
          (click)="mobileMenuOpen.set(false)"
          routerLink="/story"
          class="text-2xl font-bold tracking-[0.2em] text-white uppercase"
          >Our Story</a
        >
        <a
          (click)="mobileMenuOpen.set(false)"
          routerLink="/chef"
          class="text-2xl font-bold tracking-[0.2em] text-white uppercase"
          >Chef</a
        >
        <a
          (click)="mobileMenuOpen.set(false)"
          routerLink="/reservation"
          class="text-2xl font-bold tracking-[0.2em] text-white uppercase"
          >Reservation</a
        >
      </div>
    </header>
  `,
  styles: [
    `
      .btn-neon:hover {
        box-shadow: 0 0 20px rgba(229, 57, 53, 0.4);
      }
      .animate-fade-in {
        animation: fadeIn 0.3s ease-out forwards;
      }
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    `,
  ],
})
export class NavbarComponent {
  scrolled = signal(false);
  mobileMenuOpen = signal(false);

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.scrolled.set(window.scrollY > 50);
      });
    }
  }

  readonly menuIcon = Menu;
  readonly xIcon = X;
}

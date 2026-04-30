import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    document.body.style.overflow = this.menuOpen ? 'hidden' : '';
  }

  close() {
    this.menuOpen = false;
    document.body.style.overflow = '';
  }

  @HostListener('window:scroll')
  onScroll() {
    const nav = document.getElementById('navbar');
    nav?.classList.toggle('scrolled', window.scrollY > 60);
  }
}

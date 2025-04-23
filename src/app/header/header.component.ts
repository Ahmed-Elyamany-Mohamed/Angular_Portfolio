import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from '../services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  currentTheme$: Observable<'light' | 'dark'>;
  toggleInProgress = false;
  constructor(public themeService: ThemeService) {
    this.currentTheme$ = this.themeService.theme$;
  }
  toggleTheme(): void {
    this.toggleInProgress = true;
    this.themeService.toggleTheme();
    setTimeout(() => (this.toggleInProgress = false), 1000); // match animation duration
  }
}

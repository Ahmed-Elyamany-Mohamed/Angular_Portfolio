import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from '../services/theme.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  currentTheme$: Observable<'light' | 'dark'>;

  constructor(public themeService: ThemeService) {
    this.currentTheme$ = this.themeService.theme$;
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}

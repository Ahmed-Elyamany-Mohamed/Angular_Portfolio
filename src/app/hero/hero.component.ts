import { Component } from '@angular/core';
import { SafeLinkDirective } from '../directives/safe-link.directive';

@Component({
  selector: 'app-hero',
  imports: [SafeLinkDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  disableClick(event: MouseEvent) {
    event.preventDefault();
  }
}

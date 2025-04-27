import { Directive, input } from '@angular/core';

@Directive({
  selector: '[appSafeLink]',
  standalone: true,
  //  !! this host instead of @HostBinding and @HostListener
  host: {
    '(click)': 'onLeaveLink($event)',
  },
})
export class SafeLinkDirective {
  constructor() {}
  appSafeLink = input('myApp');

  onLeaveLink(event: MouseEvent) {
    console.log('Safe link activated');
    const wantsToLeave = window.confirm(
      'Are you sure you want to leave this page?'
    );
    if (!wantsToLeave) {
      event.preventDefault();
      return;
    }
  }
}

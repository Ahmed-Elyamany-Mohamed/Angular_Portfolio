import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SafeLinkDirective } from '../directives/safe-link.directive';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-hero',
  imports: [SafeLinkDirective, CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit {
  disableClick(event: MouseEvent) {
    event.preventDefault();
  }
  
  words: string[] = [' Developer.', ' Designer.', ' Creator.'];
  currentWordIndex: number = 0;
  currentCharIndex: number = 0;
  isDeleting: boolean = false;

  @ViewChild('animatedText', { static: true }) textElement!: ElementRef;

  typeEffect(): void {
    if (!this.textElement) return;

    const currentWord: string = this.words[this.currentWordIndex];

    if (this.isDeleting) {
      this.currentCharIndex--;
    } else {
      this.currentCharIndex++;
    }

    this.textElement.nativeElement.textContent = currentWord.substring(
      0,
      this.currentCharIndex
    );

    if (!this.isDeleting && this.currentCharIndex === currentWord.length) {
      this.isDeleting = true;
      setTimeout(() => this.typeEffect(), 7000);
      return;
    } else if (this.isDeleting && this.currentCharIndex === 0) {
      this.isDeleting = false;
      this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
    }

    const typingSpeed: number = this.isDeleting ? 150 : 200;
    setTimeout(() => this.typeEffect(), typingSpeed);
  }

  ngOnInit(): void {
    this.typeEffect();
  }
}

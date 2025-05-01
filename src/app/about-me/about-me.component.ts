import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
})
export class AboutMeComponent implements OnInit {
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
      setTimeout(() => this.typeEffect(), 3000);
      return;
    } else if (this.isDeleting && this.currentCharIndex === 0) {
      this.isDeleting = false;
      this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
    }

    const typingSpeed: number = this.isDeleting ? 100 : 150;
    setTimeout(() => this.typeEffect(), typingSpeed);
  }

  ngOnInit(): void {
    this.typeEffect();
  }
}

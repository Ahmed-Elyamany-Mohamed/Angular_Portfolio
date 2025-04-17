import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {
  words: string[] = [' Developer.', ' Designer.', ' Creator.'];
  currentWordIndex: number = 0;
  currentCharIndex: number = 0;
  isDeleting: boolean = false;

  textElement: HTMLElement | null = document.querySelector('.animated-text');

  typeEffect(): void {
    if (!this.textElement) return; // Ensure textElement is not null

    const currentWord: string = this.words[this.currentWordIndex];

    // Typing or deleting logic
    if (this.isDeleting) {
      this.currentCharIndex--;
    } else {
      this.currentCharIndex++;
    }

    // Update the text element
    this.textElement.textContent = currentWord.substring(
      0,
      this.currentCharIndex
    );

    // Check if the word is fully typed or deleted
    if (!this.isDeleting && this.currentCharIndex === currentWord.length) {
      this.isDeleting = true;
      setTimeout(() => this.typeEffect(), 1000); // Pause before deleting
      return;
    } else if (this.isDeleting && this.currentCharIndex === 0) {
      this.isDeleting = false;
      this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length; // Move to the next word
    }

    // Adjust typing speed
    const typingSpeed: number = this.isDeleting ? 100 : 150;
    setTimeout(() => this.typeEffect(), typingSpeed);
  }

  // Start the typing effect
  ngOnInit() {
    this.typeEffect();
  }
}

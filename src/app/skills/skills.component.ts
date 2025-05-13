import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent implements OnInit {
  isHovering = false;
  hoveredSkill: string | null = null;
  clickedSkill: string | null = null;
  isMobile: boolean = false;

  ngOnInit(): void {
    this.isMobile = window.innerWidth <= 768;
    console.log(`isMobile: ${this.isMobile}`);
  }

  onMouseEnter(skillName: string): void {
    if (!this.isMobile) {
      this.hoveredSkill = skillName;
    }
  }

  onMouseLeave(): void {
    if (!this.isMobile) {
      this.hoveredSkill = null;
    }
  }

  toggleClick(skillName: string): void {
    if (this.isMobile) {
      this.clickedSkill = this.clickedSkill === skillName ? null : skillName;
    }
  }

  skills = [
    // ! custom icons
    { icon: 'icon-html5', name: 'Html5' },
    { icon: 'icon-css3', name: 'Css' },
    { icon: 'icon-javascript', name: 'JavaScript' },
    { icon: 'icon-typescript', name: 'TypeScript' },
    { icon: 'icon-angular', name: 'Angular' },
    { icon: 'icon-bootstrap', name: 'BootStrap' },
    { icon: 'icon-rxjs', name: 'RxJS' },
    { icon: 'icon-figma', name: 'Figma' },
    { icon: 'icon-github', name: 'GitHub' },
    { icon: 'icon-git', name: 'Git' },
    { icon: 'icon-python', name: 'Python' },
    { icon: 'icon-java', name: 'Java' },
    { icon: 'icon-cplusplus', name: 'C++' },
    { icon: 'icon-csharp', name: 'C#' },
    { icon: 'icon-dot-net', name: '.Net' },
    { icon: 'icon-dart', name: 'Dart' },
    { icon: 'icon-flutter', name: 'Flutter' },
    { icon: 'icon-firebase', name: 'FireBase' },
    { icon: 'icon-npm', name: 'Npm' },
    { icon: 'icon-tensorflow', name: 'TensorFlow' },
    { icon: 'icon-keras', name: 'keras' },
    { icon: 'icon-microsoftoffice', name: 'Microsoft Office' },
  ];
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skills = [
    { icon: 'fa-html5', color: 'rgb(253, 95, 32)', name: 'HTML5' },
    { icon: 'fa-css3', color: 'rgb(78, 183, 248)', name: 'CSS' },
    { icon: 'fa-js', color: 'rgb(233, 233, 13)', name: 'JavaScript' },
    { icon: 'fa-angular', color: 'rgb(225, 18, 18)', name: 'Angular' },
    { icon: 'fa-bootstrap', color: 'rgb(137, 39, 228)', name: 'BootStrap' },
    { icon: 'fa-figma', color: 'blueviolet', name: 'Figma' },
    { icon: 'fa-node-js', color: 'rgb(24, 163, 24)', name: 'Node Js' },
    { icon: 'fa-github', color: 'rgb(137, 39, 228)', name: 'GitHub' },
    { icon: 'fa-git-alt', color: 'rgb(255, 96, 33)', name: 'Git' },
    { icon: 'fa-python', color: 'rgb(233, 233, 13)', name: 'Python' },
  ];
}

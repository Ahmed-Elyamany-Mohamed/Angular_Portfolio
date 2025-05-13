import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../services/experience.service';
import { CommonModule } from '@angular/common';
import { SafeLinkDirective } from '../directives/safe-link.directive';

@Component({
  selector: 'app-experience',
  imports: [CommonModule, SafeLinkDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent implements OnInit {
  experience: any[] = [];

  constructor(private experienceService: ExperienceService) {}

  ngOnInit(): void {
    this.experienceService.getProjects().subscribe((data) => {
      this.experience = data;
    });
  }
}

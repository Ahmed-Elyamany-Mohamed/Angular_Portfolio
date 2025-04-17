import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../services/experience.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent implements OnInit {
  experience: any[] = [];

  constructor(private experienceService: ExperienceService) {}

  ngOnInit(): void {
    this.experienceService.getProjects().subscribe((data) => {
      this.experience = data;
      console.log(this.experience);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../services/experience.service';
import { CommonModule } from '@angular/common';
import { SafeLinkDirective } from '../directives/safe-link.directive';
import { SortingService } from '../services/sorting.service';

@Component({
  selector: 'app-experience',
  imports: [CommonModule, SafeLinkDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent implements OnInit {
  experience: any[] = [];
  sortedExperience: any[] = [];
  currentSort: 'latest' | 'oldest' = 'latest';
  highlightedTitle = 'Global Brands Group – Internship';

  constructor(
    private experienceService: ExperienceService,
    private sorting: SortingService
  ) {}

  ngOnInit(): void {
    this.experienceService.getProjects().subscribe((data) => {
      this.experience = data;
      this.sortedExperience = this.sorting.sort(
        this.experience,
        this.currentSort
      ); // initialize
    });
  }

  toggleSort() {
    this.currentSort = this.currentSort === 'latest' ? 'oldest' : 'latest';
    this.sortedExperience = this.sorting.sort(
      this.experience,
      this.currentSort
    );
    console.log(
      'Sorted:',
      this.sortedExperience.map((p) => p.date)
    );
  }
}

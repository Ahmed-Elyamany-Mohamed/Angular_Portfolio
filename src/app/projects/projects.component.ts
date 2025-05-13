import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Required for async pipe
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-projects',
  standalone: true, // ✅ THIS is required
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [];
  animated = false;

  @ViewChildren('projectCard') projectCards!: QueryList<ElementRef>;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((data) => {
      this.projects = data;
    });
  }

  // selectedProjectIndex: number | null = null;

  // selectProject(index: number) {
  //   this.selectedProjectIndex =
  //     this.selectedProjectIndex === index ? null : index;
  // }

  // getCardTransform(index: number): string {
  //   const translateX = index * -60; // Horizontal shift
  //   const translateZ = index * -40; // Depth shift
  //   const rotateY = -5; // Subtle tilt (optional)

  //   if (this.selectedProjectIndex === index) {
  //     return `translateZ(100px) translateX(0px) scale(1.1)`;
  //   }

  //   return `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg)`;
  // }

  // currentIndex = 0;

  // goToNextProject() {
  //   if (this.currentIndex < this.projects.length - 1) {
  //     this.currentIndex++;
  //   }
  // }

  // goToPreviousProject() {
  //   if (this.currentIndex > 0) {
  //     this.currentIndex--;
  //   }
  // }
}

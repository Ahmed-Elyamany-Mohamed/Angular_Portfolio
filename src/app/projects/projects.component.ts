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
}

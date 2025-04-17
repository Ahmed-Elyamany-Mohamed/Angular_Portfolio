import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Required for async pipe
import { ProjectService } from '../services/project.service';
// import gsap from 'gsap';
// import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-projects',
  standalone: true, // ✅ THIS is required
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  projects: any[] = [];
  animated = false;

  @ViewChildren('projectCard') projectCards!: QueryList<ElementRef>;

  constructor(private projectService: ProjectService) {
    // gsap.registerPlugin(ScrollTrigger);
    // gsap.registerPlugin(ScrollToPlugin);
  }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((data) => {
      this.projects = data;
    });
    // setTimeout(() => this.animateCards(), 0); // Ensure DOM is updated before animation
  }
  ngAfterViewInit(): void {
    // if (this.projectCards && !this.animated) {
    //   this.animated = true;
    //   // gsap.fromTo(
    //   //   '.project',
    //   //   { duration: 0, opacity: 0, lazy: true },
    //   //   { duration: 3, opacity: 1, lazy: true }
    //   // );
    //   gsap.from(
    //     this.projectCards.map((ref) => ref.nativeElement),
    //     {
    //       opacity: 0,
    //       duration: 5,
    //       stagger: 0.2,
    //       ease: 'power2.out',
    //     }
    //   );
    // }
  }

  // animateCards(): void {
  //   this.projectCards.forEach((card, i) => {
  //     gsap.from(card.nativeElement, {
  //       scrollTrigger: {
  //         trigger: card.nativeElement,
  //         start: 'top 80%',
  //         toggleActions: 'play none none none',
  //       },
  //       opacity: 0,
  //       y: 50,
  //       duration: 2,
  //       delay: i * 1,
  //       ease: 'power3.out',
  //     });
  //   });
  // }
}

import { Routes } from '@angular/router';
import { AboutMeComponent } from './app/about-me/about-me.component';
import { HeroComponent } from './app/hero/hero.component';
import { SkillsComponent } from './app/skills/skills.component';
import { ExperienceComponent } from './app/experience/experience.component';
import { ProjectsComponent } from './app/projects/projects.component';
import { ContactMeComponent } from './app/contact-me/contact-me.component';

export const routes: Routes = [
  {
    path: '',
    component: HeroComponent,
  },
  {
    path: 'about-me',
    component: AboutMeComponent,
  },
  {
    path: 'skills',
    component: SkillsComponent,
  },
  {
    path: 'experience',
    component: ExperienceComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'contact',
    component: ContactMeComponent,
  },
];

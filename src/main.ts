import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { appConfig } from './app.config';

bootstrapApplication(AppComponent, appConfig).catch((err) => {
  // providers: [provideHttpClient()],
  console.log('Error bootstrapping the application:', err);
});

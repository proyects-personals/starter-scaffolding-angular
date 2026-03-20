import { bootstrapApplication } from '@angular/platform-browser';
import { Presentation, appConfig } from '@/app/presentation';

bootstrapApplication(Presentation, appConfig).catch((err) => console.error(err));

import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';
const aboutRoutes : Routes = [
  { path: '', component: AboutComponent }
]

export const routing = RouterModule.forChild(aboutRoutes);
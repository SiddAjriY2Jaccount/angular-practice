import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact.component';
const contactRoutes : Routes = [
  { path: '', component: ContactComponent }
]

export const routing = RouterModule.forChild(contactRoutes);
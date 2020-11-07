import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, data: {message: 'HOME'} },
  { path: 'projects', component: UsersComponent, data: {message: 'PROJECTS'}},
  {
    path: 'services',
    component: ServersComponent,
    data: {message: 'SERVICES'}
  },
  {
    path: 'contact',
    component: ServerComponent,
    data: {message: 'CONTACT'}
  },
  // { path: 'not-found', component: PageNotFoundComponent },
  { path: '', component: ErrorPageComponent, data: {message: 'Click on buttons to find out more!'} },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

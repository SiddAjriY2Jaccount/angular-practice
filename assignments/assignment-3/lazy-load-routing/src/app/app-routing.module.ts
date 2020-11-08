import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingPageComponent } from "./landing-page/landing-page.component";

const appRoutes: Routes = [
  { path: "home", loadChildren: "./home/home.module#HomeModule" },
  { path: "about", loadChildren: "./about/about.module#AboutModule" },
  { path: "contact", loadChildren: "./contact/contact.module#ContactModule" },
  { path: "", component: LandingPageComponent },
  { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}

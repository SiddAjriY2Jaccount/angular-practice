import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";

import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, LandingPageComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

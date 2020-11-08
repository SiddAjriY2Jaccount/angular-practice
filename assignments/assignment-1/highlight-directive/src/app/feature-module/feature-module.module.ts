import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HighlightDirective } from "./highlight.directive";

import { AppComponent } from "../app.component";

@NgModule({
  imports: [BrowserModule, FormsModule, CommonModule],
  declarations: [AppComponent, HighlightDirective],
  bootstrap: [AppComponent]
})
export class MyModuleModule {}

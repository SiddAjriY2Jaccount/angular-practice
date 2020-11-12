import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { HighlighterDirective } from './feature-module/highlighter.directive';
import { AppComponent } from './app.component';
import { FeatureModuleModule } from './feature-module/feature-module.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, FeatureModuleModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

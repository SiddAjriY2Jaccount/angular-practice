import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlighterDirective } from './highlighter.directive';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// import { AppComponent } from '../app.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports:      [ BrowserModule, FormsModule, CommonModule ],
  declarations: [ HighlighterDirective ],
  bootstrap:    [ ],
  exports: [ HighlighterDirective ]

})
export class FeatureModuleModule { }

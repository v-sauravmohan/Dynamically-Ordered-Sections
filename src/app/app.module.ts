import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HighlightCardComponent } from './components/highlight-card/highlight-card.component';
import { ResourcesSectionComponent } from './components/resources-section/resources-section.component';
import { NextStepsSectionComponent } from './components/next-steps-section/next-steps-section.component';
import { LinksSectionComponent } from './components/links-section/links-section.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HighlightCardComponent,
    ResourcesSectionComponent,
    NextStepsSectionComponent,
    LinksSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

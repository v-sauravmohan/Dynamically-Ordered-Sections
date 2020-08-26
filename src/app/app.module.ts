import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './sections/toolbar/toolbar.component';
import { HighlightCardComponent } from './sections/highlight-card/highlight-card.component';
import { ResourcesSectionComponent } from './sections/resources-section/resources-section.component';
import { NextStepsSectionComponent } from './sections/next-steps-section/next-steps-section.component';
import { LinksSectionComponent } from './sections/links-section/links-section.component';
import { FooterComponent } from './sections/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutComponent } from './pages/about/about.component';
import { BasicDynamicSectionComponent } from './sections/basic-dynamic-section/basic-dynamic-section.component';
import { DynamicSectionBuilderService } from './services/dynamic-section-builder.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HighlightCardComponent,
    ResourcesSectionComponent,
    NextStepsSectionComponent,
    LinksSectionComponent,
    FooterComponent,
    HomepageComponent,
    AboutComponent,
    BasicDynamicSectionComponent
  ],
  entryComponents: [
    HighlightCardComponent,
    ResourcesSectionComponent,
    NextStepsSectionComponent,
    LinksSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [DynamicSectionBuilderService],
  bootstrap: [AppComponent],
})
export class AppModule { }

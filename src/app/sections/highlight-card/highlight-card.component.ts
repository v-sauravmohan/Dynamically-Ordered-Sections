import { Component } from '@angular/core';
import { BasicDynamicSectionComponent } from '../basic-dynamic-section/basic-dynamic-section.component';

@Component({
  selector: 'app-highlight-card',
  templateUrl: './highlight-card.component.html',
  styleUrls: ['./highlight-card.component.css']
})
export class HighlightCardComponent extends BasicDynamicSectionComponent { }

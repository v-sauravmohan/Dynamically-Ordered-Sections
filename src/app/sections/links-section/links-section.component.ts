import { Component } from '@angular/core';
import { BasicDynamicSectionComponent } from '../basic-dynamic-section/basic-dynamic-section.component';

@Component({
  selector: 'app-links-section',
  templateUrl: './links-section.component.html',
  styleUrls: ['./links-section.component.css']
})
export class LinksSectionComponent extends BasicDynamicSectionComponent { }

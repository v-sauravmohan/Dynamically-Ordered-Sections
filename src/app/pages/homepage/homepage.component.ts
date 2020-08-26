import { Component, OnInit, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';

import { DynamicSectionBuilderService } from 'src/app/services/dynamic-section-builder.service';
import { HighlightCardComponent } from 'src/app/sections/highlight-card/highlight-card.component';
import { LinksSectionComponent } from 'src/app/sections/links-section/links-section.component';
import { NextStepsSectionComponent } from 'src/app/sections/next-steps-section/next-steps-section.component';
import { ResourcesSectionComponent } from 'src/app/sections/resources-section/resources-section.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit, AfterViewInit {

  orderFromAPI = ['highlight_card',
    'resources_section',
    'next_steps_section',
    'links_section'];

  private url = 'http://my-json-server.typicode.com/v-sauravmohan/Crypto-Ticker/posts/';
  private data;

  // orderFromAPI = ['resources_section',
  // 'next_steps_section',
  // 'links_section',
  // 'highlight_card'];

  @ViewChild('sectionsContainer', { read: ViewContainerRef, static: true })
  sectionsContainer: ViewContainerRef;


  constructor(private sectionBuilder: DynamicSectionBuilderService, private http: HttpClient) { }

  ngOnInit() {
    this.fetchSectionOrder();
  }

  ngAfterViewInit(): void {
    this.sectionBuilder.buildSections(this.sectionsContainer, this.getSectionOrderMap());
    console.log(this.data);
  }

  private fetchSectionOrder() {
    this.http.get<any>(this.url).subscribe(data => {
      this.data = data;
    });
  }

  private getSectionOrderMap() {
    const orderedList: any[] = [];
    const componentMap = this.getComponentDataMap();
    if (this.orderFromAPI && this.orderFromAPI.length) {
      for (const section of this.orderFromAPI) {
        orderedList.push(componentMap[section]);
      }
    }
    return orderedList;
  }

  private getComponentDataMap() {
    return {
      highlight_card: { component: HighlightCardComponent },
      links_section: { component: LinksSectionComponent },
      next_steps_section: { component: NextStepsSectionComponent },
      resources_section: { component: ResourcesSectionComponent },
    };
  }
}


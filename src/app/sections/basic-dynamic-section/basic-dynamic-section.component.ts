import { Component, OnInit, AfterViewInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicDynamicSectionComponent implements OnInit,AfterViewInit {

  constructor(protected cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.cdRef.detectChanges();
  }

  ngAfterViewInit() {
    this.cdRef.detectChanges();
  }
}

import { Injectable, ComponentFactoryResolver, Injector, ViewContainerRef } from '@angular/core';

@Injectable()
export class DynamicSectionBuilderService {

  constructor(private cfr: ComponentFactoryResolver, private inj: Injector) { }

  /**
   * Receives the section build request with the container and the component map
   * Calls the loadSection for all the sections
   * @param container (container to add the components)
   * @param orderedSectionMap (Component and content map sorted in the display order )
   */
  buildSections(container: ViewContainerRef, orderedSectionMap: any): void {
    if (orderedSectionMap && orderedSectionMap.length) {
      orderedSectionMap.forEach((section, index) => {
        this.loadSection(container, section.component, index);
      });
    }
  }

  /**
   * Loads the section to the container provided
   * assigns the data
   * @param holder
   * @param compType
   * @param order
   */
  private loadSection(holder: ViewContainerRef, compType, order: number) {
    const compFactory = this.cfr.resolveComponentFactory(compType);
    holder.createComponent(compFactory, order, this.inj);
  }
}


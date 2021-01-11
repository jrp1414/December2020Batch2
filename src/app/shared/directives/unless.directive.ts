import { Directive, Input, TemplateRef, ViewContainerRef,ViewChild } from '@angular/core';

@Directive({
  selector: '[unless]'
})
export class UnlessDirective {

  @ViewChild("nofilter") noFilter:any;
  constructor(private templateRef:TemplateRef<any>,private container:ViewContainerRef) { }

  @Input("unless") set value(condition:boolean){
    if (condition) {
      this.container.clear();
    }else{
      this.container.createEmbeddedView(this.templateRef);
    }
  }  

}



import { Directive,TemplateRef , ViewContainerRef , Input } from '@angular/core';


@Directive({
selector: '[appTimes]'
})

export class Times {

constructor(
private viewContainer: ViewContainerRef, //ref for the element we applied our directive to
private templateRef: TemplateRef<any> // ref to elements inside container
) {}

  
  

@Input("appTimes") set render(times:number) {
this.viewContainer.clear();

for(let i=0;i<times;i++){
this.viewContainer.createEmbeddedView(this.templateRef,{});

}

}

}
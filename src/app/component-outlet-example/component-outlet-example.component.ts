import { Injectable, Component, Injector } from "@angular/core";

@Injectable()
export class Greeter {
  suffix = '!';
}

@Component({
  selector: 'complete-component',
  template: `Complete: <ng-content></ng-content> <ng-content></ng-content>{{ greeter.suffix }}`
})
export class CompleteComponent {
  constructor(public greeter: Greeter) {}
}

@Component({
  selector: 'component-outlet-example',
  template: `
    <ng-container *ngComponentOutlet="CompleteComponent;
                                      injector: myInjector;
                                      content: myContent"></ng-container>`
})
export class NgComponentOutletCompleteExample {
  // This field is necessary to expose CompleteComponent to the template.
  CompleteComponent = CompleteComponent;
  myInjector: Injector;

  myContent = [[document.createTextNode('Ahoj')], [document.createTextNode('Svet')]];

  constructor(injector: Injector) {
    this.myInjector =
        Injector.create({providers: [{provide: Greeter, deps: []}], parent: injector});
  }
}
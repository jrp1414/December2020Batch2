import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: "[basic-highlight]"
})
export class BasicHighlightDirective implements OnInit {
    constructor(private el: ElementRef) {
        // console.log(this.el); 
    }
    ngOnInit(): void {
        this.el.nativeElement.style["background-color"] = "yellow";
    }
}


import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[better-highlight]'
})
export class BetterHighlightDirective implements OnInit {

  // @Input() defaultColor:string="";
  @Input("better-highlight") defaultColor:string="";
  @Input("hc") highlightColor:string=""; 
  @HostBinding("style") style:any; 
  constructor(private el:ElementRef) { }
  ngOnInit(): void {
    // this.el.nativeElement.style.backgroundColor = this.defaultColor;
    this.style = {backgroundColor:this.defaultColor,color:"blue"};
  }

  @HostListener("mouseenter") OnMouseEnter(){
    // this.el.nativeElement.style.backgroundColor = this.highlightColor;
    this.style = {backgroundColor:this.highlightColor,color:"maroon", fontWeight:"bold"};
  }
  @HostListener("mouseleave") OnMouseLeave(){
    // this.el.nativeElement.style.backgroundColor = this.defaultColor;
    this.style = {backgroundColor:this.defaultColor,color:"blue"};
  }
}

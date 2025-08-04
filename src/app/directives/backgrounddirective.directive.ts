import { Directive, Input, ElementRef, OnInit  } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]',
  standalone: true
})
export class BackgrounddirectiveDirective implements OnInit {
  @Input ('appBackgroundColor') currency: number = 0


  ngOnInit(): void {
    this.setBackGround()

  }

  constructor ( private el : ElementRef){

  }
  private setBackGround(){
    console.log(this.el.nativeElement)
    if(this.currency > 0){
      this.el.nativeElement.style.background = ' red'
    }
  }

}

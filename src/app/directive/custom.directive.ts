import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(public serivce:MyserviceService,public myref:ElementRef) { 
    console.log(this.myref)
    this.myref.nativeElement.style.backgroundColor="black";
  
   


  }
  @Input() id:any;
@HostListener('click') gs(){
  console.log(this.id)
} 
  
}

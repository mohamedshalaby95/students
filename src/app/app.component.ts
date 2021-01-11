import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proj4';
  constructor( private router: Router ) { }
  gohome(){
    this.router.navigate([ '/Home' ])
  }
  goabout(){
    this.router.navigate([ '/About/1' ])
  }
  gogalary(){
    this.router.navigate([ '/Galary' ])
  }
}

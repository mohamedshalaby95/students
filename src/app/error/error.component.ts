
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';



@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
 r:any
  constructor(private router: Router) {
  
    
// console.log(active.snapshot.url[0].path);
// console.log(active)
   }
  

  ngOnInit(): void {
  }

}

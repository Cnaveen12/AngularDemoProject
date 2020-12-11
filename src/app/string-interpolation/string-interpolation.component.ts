import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {
  orgName:string;
  empName:string;
  constructor() { }

  ngOnInit(): void {
    this.empName = "Naveen Kumar";
    this.orgName = "Consultancy";
  }

}

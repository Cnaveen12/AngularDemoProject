import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  val: string;
  num: number;
  constructor() { }

  ngOnInit(): void {
    this.val= "../../assets/images/sun-image.png";
    this.num = 435;
  }

}

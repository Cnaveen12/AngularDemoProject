import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stock-status',
  templateUrl: './stock-status.component.html',
  styleUrls: ['./stock-status.component.css']
})
export class StockStatusComponent implements OnInit {
@Input() price:number;
@Output() change = new EventEmitter();
  color='green';
  inputValue:number;
  constructor() { }

  ngOnInit(): void {
    this.onClickButton();
  }
  onClickButton(){
    this.change.emit(this.inputValue);
    if(this.price >180){
      this.color='green';
    }else{
      this.color='red';
    }
  }

}

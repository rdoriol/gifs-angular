import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  templateUrl: 'search-box.component.html'
})

export class SearchBoxComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  public inputValue:string = "";
  /*
  public getInput(InputHtml:string): void {
    this.inputValue = InputHtml;
    console.log(this.inputValue);
  }
  */

  @ViewChild('input_search')
  public getInputViewChield?:ElementRef;

  public getInput2() {
    this.inputValue = this.getInputViewChield?.nativeElement.value;
    console.log(this.inputValue);
  }

}  // End class

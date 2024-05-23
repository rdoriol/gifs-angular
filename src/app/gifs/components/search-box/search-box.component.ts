import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: 'search-box.component.html'
})

export class SearchBoxComponent implements OnInit {

  constructor(private gifsService:GifsService) { }

  ngOnInit() { }


  /*
  public getInput(searchValue:string): void {
    this.inputValue = searchValue;
    console.log(this.inputValue);
  }
  */

  @ViewChild('input_search')
  public getInputViewChield!:ElementRef<HTMLInputElement>;

  public getSearch():void {
    const newTag = this.getInputViewChield.nativeElement.value;
    this.gifsService.searchTagService(newTag);
      // Reset campo búsqueda HTML
    this.getInputViewChield.nativeElement.value = "";
  }

}  // End class

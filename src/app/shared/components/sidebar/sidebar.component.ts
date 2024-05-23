import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private gifsService:GifsService) {}

  get getTagsHistory() {
    return this.gifsService.getTagsHistoryService;
  }

  public searchTagActual(tagActual:string):void {
    this.gifsService.searchTagService(tagActual);
  }

}   // End class

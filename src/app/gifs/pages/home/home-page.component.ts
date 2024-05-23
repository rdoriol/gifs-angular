import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

constructor( private gifsService:GifsService ) { }

get getGifList():Gif[] {
  return this.gifsService.gifList;
}

}   // End class

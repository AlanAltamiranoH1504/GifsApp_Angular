import { Component, input } from '@angular/core';
import { GifListItem } from '../gif-list-item/gif-list-item';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-gif-list',
  imports: [GifListItem],
  templateUrl: './gif-list.html',
  styleUrl: './gif-list.css',
})
export class GifList {
  public urls = input.required<string[]>();
  public gifs = input.required<Gif[]>();
}

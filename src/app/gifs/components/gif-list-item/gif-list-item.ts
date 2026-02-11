import { Component, input } from '@angular/core';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-gif-list-item',
  imports: [],
  templateUrl: './gif-list-item.html',
  styleUrl: './gif-list-item.css',
})
export class GifListItem {
  // public url = input.required<string>();
  public gif = input.required<Gif>();
}

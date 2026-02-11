import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { GifyResponse } from '../gifs/interfaces/gify.interface';
import { Gif } from '../gifs/interfaces/gif.interface';
import { GifMapper } from '../gifs/mappers/gif.mapper';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  private http = inject(HttpClient);
  public trendingGifs = signal<Gif[]>([]);
  public searchGifs = signal<Gif[]>([]);

  constructor() {
    this.loadTrendingGifs();
  }

  public loadTrendingGifs() {
    this.http
      .get<GifyResponse>(`${environment.url_gif_api}/gifs/trending`, {
        params: {
          api_key: environment.api_key_gify,
          limit: 25,
        },
      })
      .subscribe((res) => {
        const gifs = GifMapper.mapGiphyItemsToGifArray(res.data);
        this.trendingGifs.set(gifs);
      });
  }

  public searchGif(value_to_search: string) {
    this.http
      .get<GifyResponse>(`${environment.url_gif_api}/gifs/search`, {
        params: {
          api_key: environment.api_key_gify,
          q: value_to_search,
          limit: 25,
        },
      })
      .subscribe((res) => {
        const gifs = GifMapper.mapGiphyItemsToGifArray(res.data);
        this.searchGifs.set(gifs);
      });
  }
}

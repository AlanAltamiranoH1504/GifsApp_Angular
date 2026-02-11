import { Component, inject, signal } from '@angular/core';
import { GifList } from '../../components/gif-list/gif-list';
import { ImgUrlsService } from '../../../services/img-urls';
import { GifService } from '../../../services/gif-service';

@Component({
  selector: 'app-treding-page',
  imports: [GifList],
  templateUrl: './treding-page.html',
  styleUrl: './treding-page.css',
})
export default class TredingPage {
  // ! Importacion de servicion de urls
  public ImgUrlService = inject(ImgUrlsService);

  // Importacion de servicio de gifs
  public gifService = inject(GifService);
}

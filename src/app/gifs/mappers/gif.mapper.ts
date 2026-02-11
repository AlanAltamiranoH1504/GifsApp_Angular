import { GifyItem } from '../interfaces/gify.interface';

export class GifMapper {
  static mapGiphyingItemtoGif(gifyItem: GifyItem) {
    return {
      id: gifyItem.id,
      title: gifyItem.title,
      url: gifyItem.images.original.url,
    };
  }

  static mapGiphyItemsToGifArray(items: GifyItem[]) {
    return items.map(this.mapGiphyingItemtoGif)
  }
}

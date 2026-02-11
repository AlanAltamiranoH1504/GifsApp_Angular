import { Component, inject, signal } from '@angular/core';
import { GifService } from '../../../services/gif-service';
import { GifList } from "../../components/gif-list/gif-list";

@Component({
  selector: 'app-search-page',
  imports: [GifList],
  templateUrl: './search-page.html',
  styleUrl: './search-page.css',
})
export default class SearchPage {
  protected inputSearch = signal<string>('');
  protected gifService = inject(GifService);

  save_inputSearch(event: Event) {
    const inputSearch = event.target as HTMLInputElement;
    this.inputSearch.set(inputSearch.value);
  }

  search_gift() {
    if (this.inputSearch() === '') {
      alert('No se ha ingresado valor de busqueda');
    }
    this.gifService.searchGif(this.inputSearch());
  }
}

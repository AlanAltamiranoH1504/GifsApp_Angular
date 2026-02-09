import { Component } from '@angular/core';
import { MenuOptions } from '../../interfaces';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-gifs-side-menu-options',
  templateUrl: './gifs-side-menu-options.html',
  styleUrl: './gifs-side-menu-options.css',
  imports: [RouterLink, RouterLinkActive],
})
export class GifsSideMenuOptions {
  protected menuOptions: MenuOptions[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      router: '/dashboard/trending',
      subLabel: 'Gifs Populares',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Buscador',
      subLabel: 'Buscar Gifs',
      router: '/dashboard/search',
    },
  ];
}

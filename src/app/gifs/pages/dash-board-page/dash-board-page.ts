import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { GifsSideMenu } from "../../components/gifs-side-menu/gifs-side-menu";

@Component({
  selector: 'app-dash-board-page',
  imports: [RouterOutlet, GifsSideMenu],
  templateUrl: './dash-board-page.html',
  styleUrl: './dash-board-page.css',
})
export default class DashBoardPage {

}

import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule,ExploreContainerComponent,ScrollingModule,CommonModule],
})
export class Tab1Page {

  searchTerm: string | undefined;
  public cardtitles = [
    {
      "image": "assets/images/shroom.jpg",
      "titel": "Cute Shroomies",
      "science": "Red with White Spots",
      "info":"Here's a small text description for the card content. Nothing more, nothing less."
    },
    {
      "image": "assets/images/inky.jpg",
      "titel": "The Inky One",
      "science": "Has black drips",
      "info":"Here's a small text description for the card content. Nothing more, nothing less."
    }
  ];


  constructor() {}

}

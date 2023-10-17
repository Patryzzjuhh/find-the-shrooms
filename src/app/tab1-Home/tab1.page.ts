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
  public shroomCatergories= [
    {
      "image": "assets/images/shroom.jpg",
      "title": "Deadly Shrooms",
      "science": "Fly Agaric",
      "info": "With its bright red cap adorned with white spots, this mushroom may look familiar because it resembles the iconic toadstool found in most fairytales and children’s stories. The muscimol and ibotenic acid in fly agaric are toxic to humans because they act on the central nervous system, causing loss of coordination, agitation followed by sleep, intense nausea, and occasionally hallucinations. The mushroom’s toxicity manifests itself about an hour after ingestion. Despite a slew of symptoms, the fly agaric is rarely fatal to humans, but it poses a high risk due to sporadic intoxication-induced behavior. The same toadstools, however, are fatal when consumed by household pets such as cats or dogs who find them in the wild."
    },
    {
      "image": "assets/images/inky.jpg",
      "title": "Edible Shrooms",
      "science": "Shaggy Inkcap",
      "info":"This mushroom is absolutely delicious but has an extremely short shelf life. If you leave one on your table overnight you will come down to a black ink stain in the morning."
    },
    {
      "image": "assets/images/fairyseat.jpg",
      "title": "Commonly Seen",
      "science": "Turkey Tail",
      "info":"One of the most common mushrooms on trees in North America, and a popular mushroom mostly known for its ''medicinal'' benefits. Turkey tails are a decomposer of logs and stumps of deciduous trees, and on the rare occasion, coniferous trees. They're widely used as a medicinal in things like mushroom tinctures."
    }
  ];


  constructor() {}

}

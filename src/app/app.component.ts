import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "./models/face-snap-model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  faceSnaps!: FaceSnap[];

  ngOnInit() {
    this.faceSnaps = [
    {
        title: 'Archibald',
        description: 'Mon meilleur ami depuis tout petit !',
        imageUrl: 'https://m.media-amazon.com/images/I/713b94WFFtL._AC_SX679_.jpg',
        createdDate: new Date(),
        snaps: 50
      },

      {
        title: 'Le grand Canyon',
        description: 'Un endroit magnifique pour les randonnées !',
        imageUrl: 'https://petitfute.twic.pics/medias/professionnel/308654/premium/originale/257227-grand-canyon-national-park-grand-canyon-national-park.jpg?twic=v1/cover=780x520',
        createdDate: new Date(),
        snaps: 102,
        location: 'Nevada'
      },

      {
        title: 'Un risotto',
        description: 'Une recette facile et délicieuse !',
        imageUrl: 'https://img-3.journaldesfemmes.fr/QO-xOcRSMmGDTLCDfF1-LKM_keE=/748x499/smart/e3a6c18d82684f3fb5095390a4b2b5fe/recipe-jdf/10018964.jpg',
        createdDate: new Date(),
        snaps: 190
      },

      {
        title: 'Archibald',
        description: 'Mon meilleur ami depuis tout petit !',
        imageUrl: 'https://m.media-amazon.com/images/I/713b94WFFtL._AC_SX679_.jpg',
        createdDate: new Date(),
        snaps: 255
      },

      {
        title: 'Le grand Canyon',
        description: 'Un endroit magnifique pour les randonnées !',
        imageUrl: 'https://petitfute.twic.pics/medias/professionnel/308654/premium/originale/257227-grand-canyon-national-park-grand-canyon-national-park.jpg?twic=v1/cover=780x520',
        createdDate: new Date(),
        snaps: 0,
        location: 'Nevada'
      },

      {
        title: 'Un risotto',
        description: 'Une recette facile et délicieuse !',
        imageUrl: 'https://img-3.journaldesfemmes.fr/QO-xOcRSMmGDTLCDfF1-LKM_keE=/748x499/smart/e3a6c18d82684f3fb5095390a4b2b5fe/recipe-jdf/10018964.jpg',
        createdDate: new Date(),
        snaps: 0
      }]
  }
}

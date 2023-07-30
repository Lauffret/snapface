import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myOtherOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;


  ngOnInit() {
    this.mySnap = {
      title: 'Archiblad',
      description: 'Mon meilleur ami depuis tout petit !',
      createdDate: new Date(),
      snaps: 6,
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      snapped: false
  };
    this.myOtherSnap = {
      title: 'TeddyBear',
      description: 'Mon ami depuis tout petit !',
      createdDate: new Date(),
      snaps: 3,
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      snapped: true,
      location: 'la campagne'
    };
    this.myOtherOtherSnap = {
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les randonnées.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      createdDate: new Date(),
      snapped: false,
      snaps: 0,
      location: 'la montagne'
    };
    this.myLastSnap = {
      title: 'Un bon repas',
      description: 'Mmmh que c\'est bon !',
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createdDate: new Date(),
      snaps: 29,
      snapped: true
    };
  }

}

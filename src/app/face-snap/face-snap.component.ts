import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  snapped!: boolean;

  ngOnInit() {
  }

  onSnap(){
    if(this.faceSnap.snapped){
      this.faceSnap.snaps--;
      this.faceSnap.snapped = false;
    }else{
      this.faceSnap.snaps++;
      this.faceSnap.snapped = true;
    }
  }
}

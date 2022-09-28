import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FaceSnap } from '../../models/face-snap.model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  faceSnap$!: Observable<FaceSnap>;
  buttonText!: string;
  constructor(private router: Router,private facesnapservice: FaceSnapsService) {}

  ngOnInit(){
    this.buttonText = 'Oh snap!';
  }

  onSnaps(){

    // if(this.buttonText === 'Oh snap!'){
    //   this.facesnapservice.snapFaceSnapById(this.faceSnap.id, 'snap');
    //   this.buttonText = 'Oops, un Snap!'
    // }
    // else {
    //   this.facesnapservice.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    //   this.buttonText = 'Oh snap!';
    // }
  }
  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
}

}

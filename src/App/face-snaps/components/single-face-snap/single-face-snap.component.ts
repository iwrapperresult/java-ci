import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { FaceSnapsService } from 'src/app/core/services/face-snaps.service';
import { FaceSnap } from 'src/app/face-snaps/models/face-snap.model';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap!: FaceSnap;
  faceSnap$!: Observable<FaceSnap>;
  buttonText!: string;
  constructor(
    private router: Router,
    private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute) {}

  ngOnInit(){
    this.buttonText = 'Oh Snap!';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);

  }

  onSnaps(faceSnapId: number) {
    if (this.buttonText === 'Oh Snap!') {
        this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap').pipe(
            tap(() => this.buttonText = 'Oops, unSnap!')
        );
    } else {
        this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
            tap(() => this.buttonText = 'Oh Snap!')
        );
    }
}

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
}
}

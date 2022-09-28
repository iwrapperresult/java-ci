import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subject, take, takeUntil, tap } from 'rxjs';
import { FaceSnapsService } from 'src/app/core/services/face-snaps.service';
import { FaceSnap } from 'src/app/face-snaps/models/face-snap.model';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];
  faceSnaps$!: Observable<FaceSnap[]>;

  private destroy$!: Subject<boolean>;
  constructor(private facesnapservice: FaceSnapsService) { }

  ngOnInit(): void {
    // this.destroy$ = new Subject<boolean>();
    this.faceSnaps$ = this.facesnapservice.getAllFaceSnaps();
    // interval(1000).pipe(
    //   takeUntil(this.destroy$),
    //   take(3),
    //   tap(console.log)
    // ).subscribe();
  }
  // ngOnDestroy(): void {
  //   this.destroy$.next(true)
  // }

}

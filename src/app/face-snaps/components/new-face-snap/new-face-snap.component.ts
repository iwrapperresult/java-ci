import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { FaceSnap } from 'src/app/face-snaps/models/face-snap.model';
import { FaceSnapsService } from 'src/app/core/services/face-snaps.service';

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent implements OnInit {

  snapForm!: FormGroup;
  facesnapPreview$!: Observable<FaceSnap>;
  urlRegex!: RegExp;

  constructor(private formbuilder: FormBuilder,
    private faceSnapsServices: FaceSnapsService,
    private router: Router) { }

  ngOnInit(): void {
    this.urlRegex = this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.snapForm = this.formbuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      imageUrl: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
      location: [null],
    },{
      updateOn: 'blur',
    })
    this.facesnapPreview$ = this.snapForm.valueChanges.pipe(
      map((formValue: any) => ({
        ...formValue,
        createdDate: new Date(),
        snaps: 0,
        id: 0
      }))
    );
  }

  onSubmitForm() {
    this.faceSnapsServices.addFaceSnap(this.snapForm.value).pipe(
        tap(() => this.router.navigateByUrl('/facesnaps'))
    ).subscribe();
}

}

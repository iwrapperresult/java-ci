import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FaceSnapsService } from 'src/app/core/services/face-snaps.service';
import { NewFaceSnapComponent } from "./new-face-snap.component";

describe("NewFaceSnapComponent", () => {
  let component: NewFaceSnapComponent;
  let fixture: ComponentFixture<NewFaceSnapComponent>;
  let myService: FaceSnapsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewFaceSnapComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: FaceSnapsService, useValue: {} }],
      imports: []
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFaceSnapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    myService = TestBed.inject(FaceSnapsService);
  });

  describe('method1', () => {
    it('should ...', () => {
      expect(component).toBeTruthy();
    });
  });
})
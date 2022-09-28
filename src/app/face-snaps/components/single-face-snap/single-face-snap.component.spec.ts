import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FaceSnapsService } from 'src/app/core/services/face-snaps.service';
import { SingleFaceSnapComponent } from "./single-face-snap.component";

describe("SingleFaceSnapComponent", () => {
  let component: SingleFaceSnapComponent;
  let fixture: ComponentFixture<SingleFaceSnapComponent>;
  let myService: FaceSnapsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleFaceSnapComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: FaceSnapsService, useValue: {} }],
      imports: []
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleFaceSnapComponent);
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
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FaceSnapsService } from 'src/app/core/services/face-snaps.service';
import { FaceSnapComponent } from "./face-snap.component";

describe("FaceSnapComponent", () => {
  let component: FaceSnapComponent;
  let fixture: ComponentFixture<FaceSnapComponent>;
  let myService: FaceSnapsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FaceSnapComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: FaceSnapsService, useValue: {} }],
      imports: []
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceSnapComponent);
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
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FaceSnapsService } from 'src/app/core/services/face-snaps.service';
import { FaceSnapListComponent } from "./face-snap-list.component";

describe("FaceSnapListComponent", () => {
  let component: FaceSnapListComponent;
  let fixture: ComponentFixture<FaceSnapListComponent>;
  let myService: FaceSnapsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FaceSnapListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: FaceSnapsService, useValue: {} }],
      imports: []
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceSnapListComponent);
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
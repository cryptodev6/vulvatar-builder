import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageBuilderComponent } from './image-builder.component';

describe('ImageBuilderComponent', () => {
  let component: ImageBuilderComponent;
  let fixture: ComponentFixture<ImageBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

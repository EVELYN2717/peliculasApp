import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollPersonajesComponent } from './scroll-personajes.component';

describe('ScrollPersonajesComponent', () => {
  let component: ScrollPersonajesComponent;
  let fixture: ComponentFixture<ScrollPersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollPersonajesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrollPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

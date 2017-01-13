import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, ElementRef } from '@angular/core';
import { DisplayComponent } from './display.component';

describe('DisplayComponent', () => {
  let component: DisplayComponent;
  let fixture: ComponentFixture<DisplayComponent>;

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      declarations: [DisplayComponent]
    })
      .compileComponents();
  }));

  beforeEach((): void => {
    fixture = TestBed.createComponent(DisplayComponent);
    component = fixture.componentInstance;
  });

  describe('The compiled template', (): void => {
    it('should display message', (): void => {
      component.message = 'test';

      let element: DebugElement =
        fixture.debugElement.query(By.css('.message'));
      expect(element.nativeElement.textContent).toBe('');
    });
  });
});

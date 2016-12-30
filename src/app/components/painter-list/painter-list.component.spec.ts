/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PainterListComponent } from './painter-list.component';

describe('PainterListComponent', () => {
  let component: PainterListComponent;
  let fixture: ComponentFixture<PainterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

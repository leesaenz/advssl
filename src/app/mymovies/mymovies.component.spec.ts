/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MymoviesComponent } from './mymovies.component';

describe('MymoviesComponent', () => {
  let component: MymoviesComponent;
  let fixture: ComponentFixture<MymoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MymoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MymoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

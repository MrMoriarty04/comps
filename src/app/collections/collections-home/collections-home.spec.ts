import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsHome } from './collections-home';

describe('CollectionsHome', () => {
  let component: CollectionsHome;
  let fixture: ComponentFixture<CollectionsHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollectionsHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionsHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

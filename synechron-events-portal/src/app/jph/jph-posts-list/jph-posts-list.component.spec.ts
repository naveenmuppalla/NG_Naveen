import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JphPostsListComponent } from './jph-posts-list.component';

describe('JphPostsListComponent', () => {
  let component: JphPostsListComponent;
  let fixture: ComponentFixture<JphPostsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JphPostsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JphPostsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NavigationNodeDetailComponent } from "./navigation-node-detail.component";

describe("NavigationNodeDetailComponent", () => {
  let component: NavigationNodeDetailComponent;
  let fixture: ComponentFixture<NavigationNodeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationNodeDetailComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationNodeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

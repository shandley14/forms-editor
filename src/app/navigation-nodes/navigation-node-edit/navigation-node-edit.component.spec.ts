import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NavigationNodeEditComponent } from "./navigation-node-edit.component";

describe("NavigationNodeEditComponent", () => {
  let component: NavigationNodeEditComponent;
  let fixture: ComponentFixture<NavigationNodeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationNodeEditComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationNodeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

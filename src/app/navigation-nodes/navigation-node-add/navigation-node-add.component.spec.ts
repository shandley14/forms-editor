import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NavigationNodeAddComponent } from "./navigation-node-add.component";

describe("NavigationNodeAddComponent", () => {
  let component: NavigationNodeAddComponent;
  let fixture: ComponentFixture<NavigationNodeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationNodeAddComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationNodeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

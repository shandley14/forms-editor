import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "supplychain8 forms editor";
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      { label: "Forms", icon: "fa fa-fw fa-bar-chart", routerLink: ["/forms"] },
      {
        label: "Navigation Nodes",
        icon: "fa fa-fw fa-bar-chart",
        routerLink: ["/navigation-nodes"]
      }
    ];
  }
}

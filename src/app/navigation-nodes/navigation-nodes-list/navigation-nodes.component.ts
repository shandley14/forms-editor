import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../api.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-navigation-nodes",
  templateUrl: "./navigation-nodes.component.html",
  styleUrls: ["./navigation-nodes.component.scss"]
})
export class NavigationNodesComponent implements OnInit {
  cols: any = [];
  data: any = [];
  isLoadingResults = true;

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {
    this.cols = [
      { field: "id", header: "ID" },
      { field: "name", header: "Name" },
      { field: "code", header: "Code" }
    ];

    this.api.getNavigationNodes().subscribe(
      res => {
        this.data = res;
        console.log(this.data);
        this.isLoadingResults = false;
      },
      err => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
  onRowSelect(event) {
    console.log("selected row", event.data.id);
    this.router.navigateByUrl("/navigation-node-details/" + event.data.id);
  }
}

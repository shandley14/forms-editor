import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "../../api.service";
import { NavigationNode } from "../../navigation-node";

@Component({
  selector: "app-navigation-node-detail",
  templateUrl: "./navigation-node-detail.component.html",
  styleUrls: ["./navigation-node-detail.component.scss"]
})
export class NavigationNodeDetailComponent implements OnInit {
  navigationNode: NavigationNode = {
    id: "",
    name: "",
    code: "" /*prod_price: null, updated_at: null*/
  };
  isLoadingResults = true;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    console.log(this.route.snapshot.params["id"]);
    this.getNavigationNodeDetails(this.route.snapshot.params["id"]);
  }

  getNavigationNodeDetails(id) {
    this.api.getNavigationNode(id).subscribe(data => {
      this.navigationNode = data;
      console.log(this.navigationNode);
      this.isLoadingResults = false;
    });
  }

  deleteNavigationNode(id) {
    this.isLoadingResults = true;
    this.api.deleteNavigationNode(id).subscribe(
      res => {
        this.isLoadingResults = false;
        this.router.navigate(["/navigation-nodes"]);
      },
      err => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
}

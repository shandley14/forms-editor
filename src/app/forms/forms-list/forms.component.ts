import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../api.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-forms",
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.scss"]
})
export class FormsComponent implements OnInit {
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

    this.api.getForms().subscribe(
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
    this.router.navigateByUrl("/form-details/" + event.data.id);
  }
}

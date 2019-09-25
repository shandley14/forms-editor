import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "../../api.service";
import { Form } from "../../form";

@Component({
  selector: "app-form-detail",
  templateUrl: "./form-detail.component.html",
  styleUrls: ["./form-detail.component.scss"]
})
export class FormDetailComponent implements OnInit {
  form: Form = {
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
    this.getFormDetails(this.route.snapshot.params["id"]);
  }

  getFormDetails(id) {
    this.api.getForm(id).subscribe(data => {
      this.form = data;
      console.log(this.form);
      this.isLoadingResults = false;
    });
  }

  deleteForm(id) {
    this.isLoadingResults = true;
    this.api.deleteForm(id).subscribe(
      res => {
        this.isLoadingResults = false;
        this.router.navigate(["/forms"]);
      },
      err => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
}

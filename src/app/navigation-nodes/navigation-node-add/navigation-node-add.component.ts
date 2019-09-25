import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../../api.service";
import {
  FormControl,
  FormGroupDirective,
  FormBuilder,
  FormGroup,
  NgForm,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-navigation-node-add",
  templateUrl: "./navigation-node-add.component.html",
  styleUrls: ["./navigation-node-add.component.scss"]
})
export class NavigationNodeAddComponent implements OnInit {
  navigationNodeForm: FormGroup;
  id: string = "";
  code: string = "";
  name: string = "";
  isLoadingResults = false;

  constructor(
    private router: Router,
    private api: ApiService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.navigationNodeForm = this.formBuilder.group({
      prod_name: [null, Validators.required],
      prod_desc: [null, Validators.required],
      prod_price: [null, Validators.required]
    });
  }

  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addForm(form).subscribe(
      res => {
        let id = res["_id"];
        this.isLoadingResults = false;
        this.router.navigate(["/navigation-node-details", id]);
      },
      err => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
}

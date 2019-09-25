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
  selector: "app-form-add",
  templateUrl: "./form-add.component.html",
  styleUrls: ["./form-add.component.scss"]
})
export class FormAddComponent implements OnInit {
  formForm: FormGroup;
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
    this.formForm = this.formBuilder.group({
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
        this.router.navigate(["/form-details", id]);
      },
      err => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
}

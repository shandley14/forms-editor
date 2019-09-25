import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
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
  selector: "app-form-edit",
  templateUrl: "./form-edit.component.html",
  styleUrls: ["./form-edit.component.scss"]
})
export class FormEditComponent implements OnInit {
  formForm: FormGroup;
  id: string = "";
  code: string = "";
  name: string = "";
  //prod_price: number = null;
  isLoadingResults = false;
  data: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getForm(this.route.snapshot.params["id"]);
    this.formForm = this.formBuilder.group({
      id: [null, Validators.required],
      code: [null, Validators.required],
      name: [null, Validators.required]
      //prod_price: [null, Validators.required]
    });
  }

  getForm(id) {
    this.api.getForm(id).subscribe(res => {
      this.data = res["data"];
      this.id = this.data.id;
      this.formForm.setValue({
        id: this.data.id,
        code: this.data.code,
        name: this.data.name
        //prod_price: data.prod_price
      });
    });
  }

  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    this.data = { ...this.data, ...form };
    this.api.updateForm(this.id, this.data).subscribe(
      res => {
        let id = res["id"];
        this.isLoadingResults = false;
        this.router.navigate(["/form-details", id]);
      },
      err => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }

  formDetails() {
    this.router.navigate(["/form-details", this.id]);
  }
}

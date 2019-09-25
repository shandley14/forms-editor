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
  selector: "app-navigation-node-edit",
  templateUrl: "./navigation-node-edit.component.html",
  styleUrls: ["./navigation-node-edit.component.scss"]
})
export class NavigationNodeEditComponent implements OnInit {
  navigationNodeForm: FormGroup;
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
    this.getNavigationNode(this.route.snapshot.params["id"]);
    this.navigationNodeForm = this.formBuilder.group({
      id: [null, Validators.required],
      code: [null, Validators.required],
      name: [null, Validators.required]
      //prod_price: [null, Validators.required]
    });
  }

  getNavigationNode(id) {
    this.api.getNavigationNode(id).subscribe(res => {
      this.data = res["data"];
      this.id = this.data.id;
      this.navigationNodeForm.setValue({
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
    this.api.updateNavigationNode(this.id, this.data).subscribe(
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

  navigationNodeDetails() {
    this.router.navigate(["/navigation-node-details", this.id]);
  }
}

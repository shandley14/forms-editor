import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { FormsComponent } from "./forms/forms-list/forms.component";
import { FormAddComponent } from "./forms/form-add/form-add.component";
import { FormEditComponent } from "./forms/form-edit/form-edit.component";
import { FormDetailComponent } from "./forms/form-detail/form-detail.component";
import { UiSharedModule } from "./ui-shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NavigationNodesComponent } from "./navigation-nodes/navigation-nodes-list/navigation-nodes.component";
import { NavigationNodeAddComponent } from "./navigation-nodes/navigation-node-add/navigation-node-add.component";
import { NavigationNodeDetailComponent } from "./navigation-nodes/navigation-node-detail/navigation-node-detail.component";
import { NavigationNodeEditComponent } from "./navigation-nodes/navigation-node-edit/navigation-node-edit.component";

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    FormAddComponent,
    FormEditComponent,
    FormDetailComponent,
    NavigationNodesComponent,
    NavigationNodeAddComponent,
    NavigationNodeDetailComponent,
    NavigationNodeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UiSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

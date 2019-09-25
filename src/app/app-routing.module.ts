import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormDetailComponent } from "./forms/form-detail/form-detail.component";
import { FormsComponent } from "./forms/forms-list/forms.component";
import { FormAddComponent } from "./forms/form-add/form-add.component";
import { FormEditComponent } from "./forms/form-edit/form-edit.component";
import { NavigationNodeDetailComponent } from "./navigation-nodes/navigation-node-detail/navigation-node-detail.component";
import { NavigationNodesComponent } from "./navigation-nodes/navigation-nodes-list/navigation-nodes.component";
import { NavigationNodeAddComponent } from "./navigation-nodes/navigation-node-add/navigation-node-add.component";
import { NavigationNodeEditComponent } from "./navigation-nodes/navigation-node-edit/navigation-node-edit.component";

const routes: Routes = [
  {
    path: "forms",
    component: FormsComponent,
    data: { title: "List of Forms" }
  },
  {
    path: "form-details/:id",
    component: FormDetailComponent,
    data: { title: "Form Details" }
  },
  {
    path: "form-add",
    component: FormAddComponent,
    data: { title: "Add Form" }
  },
  {
    path: "form-edit/:id",
    component: FormEditComponent,
    data: { title: "Edit Form" }
  },
  {
    path: "navigation-nodes",
    component: NavigationNodesComponent,
    data: { title: "List of Navigation Nodes" }
  },
  {
    path: "navigation-node-details/:id",
    component: NavigationNodeDetailComponent,
    data: { title: "Navigation Nodes Details" }
  },
  {
    path: "navigation-node-add",
    component: NavigationNodeAddComponent,
    data: { title: "Add Navigation Node" }
  },
  {
    path: "navigation-node-edit/:id",
    component: NavigationNodeEditComponent,
    data: { title: "Edit Navigation Node" }
  },
  { path: "", redirectTo: "/forms", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

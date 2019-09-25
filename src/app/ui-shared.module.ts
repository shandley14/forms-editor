import { NgModule } from "@angular/core";

//PrimeNG Containers
import { CarouselModule } from "primeng/carousel";
import { TabViewModule } from "primeng/tabview";
import { CardModule } from "primeng/card";
import { CheckboxModule } from "primeng/checkbox";
import { DropdownModule } from "primeng/dropdown";

import { CalendarModule } from "primeng/calendar";
import { ButtonModule } from "primeng/button";
import { SidebarModule } from "primeng/sidebar";
import { PanelMenuModule } from "primeng/panelmenu";
import { ScrollPanelModule } from "primeng/scrollpanel";
import { RadioButtonModule } from "primeng/radiobutton";
import { PanelModule } from "primeng/panel";
import { TableModule } from "primeng/table";
import { InputTextModule } from "primeng/inputtext";
import { AutoCompleteModule } from "primeng/autocomplete";
import { InputTextareaModule } from "primeng/inputtextarea";
import { DialogModule } from "primeng/dialog";
import { MessageService } from "primeng/api";
import { ToastModule } from "primeng/toast";
import { ToolbarModule } from "primeng/toolbar";
import { PaginatorModule } from "primeng/paginator";
import { TabMenuModule } from "primeng/tabmenu";

@NgModule({
  imports: [
    CarouselModule,
    CardModule,
    CheckboxModule,
    DropdownModule,
    CalendarModule,
    ButtonModule,
    InputTextModule,
    TabViewModule,
    TableModule,
    SidebarModule,
    PanelMenuModule,
    AutoCompleteModule,
    ScrollPanelModule,
    RadioButtonModule,
    PanelModule,
    InputTextareaModule,
    DialogModule,
    ToastModule,
    ToolbarModule,
    PaginatorModule
  ],
  declarations: [],
  exports: [
    CarouselModule,
    CardModule,
    CheckboxModule,
    DropdownModule,
    CalendarModule,
    ButtonModule,
    InputTextModule,
    TabViewModule,
    TableModule,
    SidebarModule,
    PanelMenuModule,
    AutoCompleteModule,
    ScrollPanelModule,
    RadioButtonModule,
    PanelModule,
    InputTextareaModule,
    DialogModule,
    ToastModule,
    ToolbarModule,
    PaginatorModule,
    TabMenuModule
  ],
  providers: [MessageService]
})
export class UiSharedModule {}

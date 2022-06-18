import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { ContentComponent } from './content/content.component';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  declarations: [
    DashboardComponent,
    AdminComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    CKEditorModule
  ]
})
export class AdminModule { }

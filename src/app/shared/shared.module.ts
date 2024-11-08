import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
const components: any = [];
const modules = [
   CommonModule,
   ReactiveFormsModule,
   FormsModule,
   RouterModule
 ];
@NgModule({
   declarations: [],
   imports: [modules],
   exports: [...components, ...modules],
 })
 export class SharedModule {}
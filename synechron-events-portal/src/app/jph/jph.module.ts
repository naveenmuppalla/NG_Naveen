import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { JphPostsListComponent } from './jph-posts-list/jph-posts-list.component';
import { JphService } from './services/jph.service';



@NgModule({
  declarations: [JphPostsListComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    JphPostsListComponent
  ],providers:[
    JphService
  ]
})
export class JphModule { }

import { SharedModule } from './../../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { QuestionComponent } from './question.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestItemComponent } from './components/test-item/test-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [QuestionComponent, TestItemComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    SharedModule
  ],
  exports: [
    QuestionComponent
  ],
  providers: []
})
export class QuestionModule { }

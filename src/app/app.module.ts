import { QuestionModule } from './pages/question/question.module';
import { MainComponent } from './pages/main/main.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TestService } from './services/test/test.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, MainComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    QuestionModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, TestService],
  bootstrap: [AppComponent],
})
export class AppModule {}

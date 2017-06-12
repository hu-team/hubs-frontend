import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { router } from './router/router';
import { RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';
import { AuthService } from './auth.service';
import { OverviewModule } from './overview/overview.module';
import {Auth} from './auth.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    LoginModule,
    OverviewModule,
    RouterModule.forRoot(router)
  ],
  providers: [
    AuthService, Auth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

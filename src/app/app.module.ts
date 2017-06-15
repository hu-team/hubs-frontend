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
import { MailComponent } from './mail/mail/mail.component';
import {MailModule} from "./mail/mail.module";
import {ResultModule} from "./result/result.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MailModule,
    BrowserAnimationsModule,
    LoginModule,
    OverviewModule,
    ResultModule,

    RouterModule.forRoot(router)
  ],
  providers: [
    AuthService, Auth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

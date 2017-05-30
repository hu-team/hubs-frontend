import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PresenceService} from "./presence.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    PresenceService
  ]
})
export class PresenceModule { }

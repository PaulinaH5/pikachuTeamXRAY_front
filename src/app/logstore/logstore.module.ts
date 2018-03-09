import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/material.module';

import { LogstoreRoutingModule } from './logstore-routing.module';
import { LogstoreComponent } from './logstore.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    LogstoreRoutingModule
  ],
  declarations: [
    LogstoreComponent
  ]
})
export class LogstoreModule { }

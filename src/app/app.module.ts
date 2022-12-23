import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './template/home/home.component';
import { NavberComponent } from './template/navber/navber.component';
import { DashboardComponent } from './template/dashboard/dashboard.component';
import { C3boardComponent } from './template/c3board/c3board.component';
import { SeprobeComponent } from './template/seprobe/seprobe.component';
import { TurnstileComponent } from './template/turnstile/turnstile.component';
import { PcManageComponent } from './template/pc/pc-manage/pc-manage.component';
import { ItemsManageComponent } from './template/items/items-manage/items-manage.component';
import { CreateNewitemsComponent } from './template/items/create-newitems/create-newitems.component';
import { CreateNewpcComponent } from './template/pc/create-newpc/create-newpc.component';
import { EditPcComponent } from './template/pc/edit-pc/edit-pc.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { ItemsService } from './service/items.service';
import { PcService } from './service/pc.service';

import { ReactiveFormsModule,NgForm,FormsModule } from '@angular/forms';
import { ItemDetailsComponent } from './template/items/item-details/item-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavberComponent,
    DashboardComponent,
    C3boardComponent,
    SeprobeComponent,
    TurnstileComponent,
    PcManageComponent,
    ItemsManageComponent,
    CreateNewitemsComponent,
    CreateNewpcComponent,
    EditPcComponent,
    ItemDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,



  ],
  providers: [ItemsService,PcService],
  bootstrap: [AppComponent]
})
export class AppModule { }

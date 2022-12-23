import { EditPcComponent } from './template/pc/edit-pc/edit-pc.component';
import { CreateNewpcComponent } from './template/pc/create-newpc/create-newpc.component';
import { CreateNewitemsComponent } from './template/items/create-newitems/create-newitems.component';
import { ItemsManageComponent } from './template/items/items-manage/items-manage.component';

import { HomeComponent } from './template/home/home.component';
import { PcManageComponent } from './template/pc/pc-manage/pc-manage.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailsComponent } from './template/items/item-details/item-details.component';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch:'full'},
  {path:'pcmanage', component: PcManageComponent},
  {path:'itemsmanage', component: ItemsManageComponent},
  {path:'itemdetails', component: ItemDetailsComponent},
  {path:'newitems', component: CreateNewitemsComponent},
  {path:'newpc', component: CreateNewpcComponent},
  {path:'editpc', component: EditPcComponent},

  {path:'home', component: HomeComponent},

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { TypeComponent } from './template/items/type/type.component';
import { BrandComponent } from './template/items/brand/brand.component';
import { RegisterComponent } from './template/user/register/register.component';
import { LoginComponent } from './template/user/login/login.component';
import { PcDetailsComponent } from './template/pc/pc-details/pc-details.component';
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
  {path:'itemdetails/:typeId/:projectId', component: ItemDetailsComponent},
  {path:'newitems', component: CreateNewitemsComponent},
  {path:'newpc', component: CreateNewpcComponent},
  {path:'detailpc/:pcId', component: PcDetailsComponent},
  {path:'editpc', component: EditPcComponent},

  {path:'home', component: HomeComponent},

  {path:'login', component: LoginComponent},
  {path:'login/:en', component: LoginComponent},
  {path:'register', component: RegisterComponent},

  {path:'newBrand', component: BrandComponent},
  {path:'newType', component: TypeComponent},

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

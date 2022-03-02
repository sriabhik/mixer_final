import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCentersComponent } from './pages/admin/add-centers/add-centers.component';
import { CenterProfileComponent } from './pages/admin/center-profile/center-profile.component';
import { DisplayUserComponent } from './pages/admin/display-user/display-user.component';
import { EditCenterComponent } from './pages/admin/edit-center/edit-center.component';
import { HomepageAdminComponent } from './pages/admin/homepage-admin/homepage-admin.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import{HomepageComponent} from './pages/customer/homepage/homepage.component';
import { AdminGuard } from './service/admin.guard';
import { CustomerGuard } from './service/customer.guard';
const routes: Routes = [
  {
    path:'signup',
    component:SignupComponent,
    pathMatch:'full'
  },
  {
    path:'',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'admin',
    component:HomepageAdminComponent,
    // pathMatch:'full',
    canActivate:[AdminGuard],
    children:[
     
      {
        path:'editServiceCenter/:serviceCenterID',
        component:EditCenterComponent
      },
    
      {
        path:'displayUser',
        component:DisplayUserComponent
      },
      {
        path:'centerProfile',
        component:CenterProfileComponent
      },
      {
        path:'addCenters',
        component:AddCentersComponent
      }
    ]
  },
  {
    path:'customer',
    component:HomepageComponent,
    pathMatch:'full',
    canActivate:[CustomerGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

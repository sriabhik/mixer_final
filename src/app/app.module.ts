import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/auth/signup/signup.component';

import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { LoginComponent } from './pages/auth/login/login.component';
import { authInterceptorProviders } from './service/auth.interceptor';
import { HomepageComponent } from './pages/customer/homepage/homepage.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { NavbarLoggedInComponent } from './components/navbar-logged-in/navbar-logged-in.component';
import { CustomerNavbarComponent } from './components/customer-navbar/customer-navbar.component';
import { AdminNavComponent } from './components/admin-nav/admin-nav.component';
import { DisplayUserComponent } from './pages/admin/display-user/display-user.component';
import { ConfirmDialogComponent } from './pages/admin/confirm-dialog/confirm-dialog.component';
import { HomepageAdminComponent } from './pages/admin/homepage-admin/homepage-admin.component';
import { AddCentersComponent } from './pages/admin/add-centers/add-centers.component';

//
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { EditUserDialogComponent } from './pages/admin/edit-user-dialog/edit-user-dialog.component';
import { CenterProfileComponent } from './pages/admin/center-profile/center-profile.component';
import { DeleteCenterDialogComponent } from './pages/admin/delete-center-dialog/delete-center-dialog.component';
import { EditCenterComponent } from './pages/admin/edit-center/edit-center.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomepageComponent,
    NavbarLoggedInComponent,
    CustomerNavbarComponent,
    AdminNavComponent,
    DisplayUserComponent,
    ConfirmDialogComponent,
    HomepageAdminComponent,
    AddCentersComponent,
    EditUserDialogComponent,
    CenterProfileComponent,
    DeleteCenterDialogComponent,
    EditCenterComponent
  
  ],
  imports: [
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    ReactiveFormsModule ,
    MatDialogModule
  ],
  providers: [{
    provide: MatDialogRef,
    useValue: {}
  },authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

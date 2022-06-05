import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { FrontPageAdminComponent } from './front-page-admin/front-page-admin.component';
import { FrontPageUserComponent } from './front-page-user/front-page-user.component';
import { FrontPageCompanyOwnerComponent } from './front-page-company-owner/front-page-company-owner.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, provideRoutes } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from "@angular/material/checkbox";
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiKeySaveComponent } from './api-key-save/api-key-save.component';
import { UnactivatedCompanyComponent } from './unactivated-company/unactivated-company.component';
import { MatTableModule } from '@angular/material/table';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { PostReviewComponent } from './post-review/post-review.component';
import { CreateJobOffersComponent } from './create-job-offers/create-job-offers.component';
import { OwnerHomePageComponent } from './owner-home-page/owner-home-page.component';
import { CompanyUpdateComponent } from './company-update/company-update.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    RegistrationComponent,
    LoginComponent,
    FrontPageAdminComponent,
    FrontPageUserComponent,
    FrontPageCompanyOwnerComponent,
    ApiKeySaveComponent,
    UnactivatedCompanyComponent,
    CreateCompanyComponent,
    UserHomePageComponent,
    ReviewsComponent,
    PostReviewComponent,
    CreateJobOffersComponent,
    OwnerHomePageComponent,
    CompanyUpdateComponent,
    HomeComponent
  ],
  imports: [
    /*BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    HttpClientModule,
    CommonModule,
    MatFormFieldModule,
    //NgbModalModule,
    MatSlideToggleModule,
    MatToolbarModule,
    FormsModule, 
    */

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    HttpClientModule,
    CommonModule,
    MatFormFieldModule,
    //NgbModalModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatTableModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

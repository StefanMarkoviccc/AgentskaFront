import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiKeySaveComponent } from './api-key-save/api-key-save.component';
import { CompanyUpdateComponent } from './company-update/company-update.component';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { CreateJobOffersComponent } from './create-job-offers/create-job-offers.component';
import { FrontPageAdminComponent } from './front-page-admin/front-page-admin.component';
import { FrontPageCompanyOwnerComponent } from './front-page-company-owner/front-page-company-owner.component';
import { FrontPageUserComponent } from './front-page-user/front-page-user.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OwnerHomePageComponent } from './owner-home-page/owner-home-page.component';
import { PostReviewComponent } from './post-review/post-review.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { UnactivatedCompanyComponent } from './unactivated-company/unactivated-company.component';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';

const routes: Routes = [

    {path: 'front-page', component: FrontPageComponent},
    {path: 'registration', component: RegistrationComponent},
    {path: 'login', component: LoginComponent},
    {path: 'front-page-admin', component: FrontPageAdminComponent},
    {path: 'front-page-company-owner', component: FrontPageCompanyOwnerComponent},
    {path: 'front-page-user', component: FrontPageUserComponent},
    {path: 'api-key-save', component:ApiKeySaveComponent},
    {path: 'unactivated-company', component:UnactivatedCompanyComponent},
    {path: 'create-company', component:CreateCompanyComponent},
    {path: 'user-home-page', component:UserHomePageComponent},
    {path: 'reviews', component:ReviewsComponent},
    {path: 'post-review' , component: PostReviewComponent},
    {path: 'create-job-offers', component:CreateJobOffersComponent},
    {path: 'owner-home-page', component:OwnerHomePageComponent},
    {path: 'company-update', component:CompanyUpdateComponent},
    {path: 'home', component:HomeComponent},
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
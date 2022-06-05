import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-job-offers',
  templateUrl: './create-job-offers.component.html',
  styleUrls: ['./create-job-offers.component.css']
})
export class CreateJobOffersComponent implements OnInit {

  form: FormGroup;
  public loginInvalid = false;
  private formSubmitAttempt = false;
  public errorMessage : any; 
  company: any;
  user:any;
  companyId : any;
  job: any;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService
  ) {

    this.form = this.fb.group({
      jobDescription: ['', Validators.required],
      jobPosition: ['', Validators.required],
      activityLog: ['', Validators.required],
      jobConditions: ['', Validators.required],
      clicked: false,

    });

    this.user = this.api.getUserFromLocalstorage();
    
  }

  async ngOnInit(): Promise<void> {
  /*  const userString = localStorage.getItem('user');
    if(userString == null) {
      this.router.navigate(['/login'], {queryParams: { login: 'false' } });
      return;
    }
  
    this.user = JSON.parse((userString));
    if(this.user.role != 1)
    {
      this.router.navigate(['/create-job-offers'], {queryParams: { permission: 'false' } });
      return;
    }
*/
     this.api.getCompanyByUser().subscribe((response : any) => {
      this.company = response;
      this.companyId = this.company.id;
     });

  }

  async onSubmit(): Promise<void> {

    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      try {
        const jobDescription = this.form.get('jobDescription')?.value;
        const jobPosition = this.form.get('jobPosition')?.value;
        const activityLog = this.form.get('activityLog')?.value;
        const jobConditions = this.form.get('jobConditions')?.value;
        const clicked = this.form.get('clicked')?.value;
        if(clicked == true)
        {
          this.api.addJob({
          
            jobDescription: jobDescription,
            jobPosition: jobPosition,
            activityLog: activityLog,
            jobConditions: jobConditions,
            company: this.company,
        }).subscribe((response : any) => {
          this.job = response;
          this.router.navigate(['/owner-home-page']);

        });

        }

        else
        {
          
          console.log(this.company);

          this.api.addJobDontShare({
          
            jobDescription: jobDescription,
            jobPosition: jobPosition,
            activityLog: activityLog,
            jobConditions: jobConditions,
            company: this.company,       

        }).subscribe((response : any) => {


          this.router.navigate(['/owner-home-page']);

                });
        }
        


      } catch (err) {
        this.loginInvalid = true;
        
      }
    } else {
      this.formSubmitAttempt = true;
    }

   

}

}

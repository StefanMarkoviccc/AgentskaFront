import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  user:any
  form: FormGroup;
  public loginInvalid = false;
  private formSubmitAttempt = false;
  public errorMessage : any; 

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService
  ) {

    this.form = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      companyEmail: ['', Validators.required],
      cultureDescription: ['', Validators.required],
      workDescription: ['', Validators.required],
      jobPositions: ['', Validators.required]

    });
    this.user = api.getUserFromLocalstorage();
console.log(this.user);
  }

  async ngOnInit(): Promise<void> {
  /*  const userString = localStorage.getItem('user');
        if(userString == null) {
          this.router.navigate(['/login'], {queryParams: { login: 'false' } });
          return;
        }
      
        this.user = JSON.parse((userString));

    /*    if(this.user.role != 2)
        {
          this.router.navigate(['/create-company'], {queryParams: { permission: 'false' } });
          return;
        }*/


  }

  async onSubmit(): Promise<void> {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      try {
        const name = this.form.get('name')?.value;
        const phone = this.form.get('phone')?.value;
        const address = this.form.get('address')?.value;
        const companyEmail = this.form.get('companyEmail')?.value;
        const cultureDescription = this.form.get('cultureDescription')?.value;
        const workDescription = this.form.get('workDescription')?.value;
        const jobPositions = this.form.get('jobPositions')?.value;

  
        this.api.createCompany({
          Name: name,
          Phone: phone,
          Address: address,
          CompanyEmail: companyEmail,
          CultureDescription: cultureDescription,
          WorkDescription: workDescription,
          JobPositions: jobPositions,
          Owner: this.user,
          OwnerId : this.user.id
        }).subscribe((response : any) => {
          this.router.navigate(['/user-home-page']);
        });


      } catch (err) {
        this.loginInvalid = true;
        
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }
}

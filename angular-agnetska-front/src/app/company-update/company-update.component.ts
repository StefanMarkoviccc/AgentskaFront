import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.css']
})
export class CompanyUpdateComponent implements OnInit {

  form: FormGroup;
  public loginInvalid = false;
  private formSubmitAttempt = false;
  public errorMessage : any;
  user: any;
  company: any;
  id:any;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService,

  ) {
    
    this.form = this.fb.group({
      name: [''],
      phone: [''],
      address: [''],
      companyEmail: [''],
      workDescription: [''],
      cultureDescription: [''],
      jobPositions: [''],
    });
 
  }
  

  async ngOnInit():  Promise<void>  {
    const userString = localStorage.getItem('user');
        if(userString == null) {
          this.router.navigate(['/login'], {queryParams: { login: 'false' } });
          return;
        }
      
        this.user = JSON.parse((userString));
        if(this.user.role != 1){    
          this.router.navigate(['/company-updata'], {queryParams: { permission: 'false' } });
          return;
        }
      this.api.getCompanyByUser().subscribe((response : any) => {
      this.company = response;
      this.id = this.company.id;
      this.form.patchValue({
        name: this.company.name,
        phone: this.company.phone,
        address: this.company.address,
        companyEmail: this.company.companyEmail,
        workDescription: this.company.workDescription,
        cultureDescription: this.company.cultureDescription,
        jobPositions: this.company.jobPositions,
        
     });
    
  
    })
  
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
        const workDescription = this.form.get('workDescription')?.value;
        const cultureDescription = this.form.get('cultureDescription')?.value;
        const jobPositions = this.form.get('jobPositions')?.value;

        this.api.updateCompany({
          name: name,
          phone: phone,
          address: address,
          companyEmail: companyEmail,
          workDescription: workDescription,
          cultureDescription: cultureDescription,
          jobPositions: jobPositions,
          owner: this.user,
          id: 2
          
        }).subscribe((response : any) => {
          this.ngOnInit()
        });


      } catch (err) {
        this.loginInvalid = true;
        
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }
}

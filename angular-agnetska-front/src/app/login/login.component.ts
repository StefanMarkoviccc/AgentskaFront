import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  user: any;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) 
  {
    this.form = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }
  onSubmit() {

    this.api.login({
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value,
      clientId: 'ClientID',
      clientSecret: 'ClientSecret'
    }).subscribe((response: any) => {
      console.log(response);
      localStorage.setItem('token', response.token)

      this.api.getCurrentUser().subscribe((response: any) => {
        localStorage.setItem('user', JSON.stringify(response));

      console.log(response)
      if(response.userType == 2)
      {
        this.router.navigate(['/unactivated-company']);
      }
  
      else if(response.userType == 1)
      {
        this.router.navigate(['/owner-home-page']);
      }
  
      else if(response.userType == 0)
      {
        this.router.navigate(['/user-home-page']);
      }
      
    });
    });
  
  }


  navigate(data : any){
    if(data === 'login'){
      this.router.navigate(['/login']);
    }

    else if(data === 'registration'){
      this.router.navigate(['/registration']);
    }
    else if(data === 'home'){
      this.router.navigate(['/unregistered-home-page']);
    }
    
  }

}
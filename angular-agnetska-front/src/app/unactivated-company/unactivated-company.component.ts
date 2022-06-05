import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-unactivated-company',
  templateUrl: './unactivated-company.component.html',
  styleUrls: ['./unactivated-company.component.css']
})
export class UnactivatedCompanyComponent implements OnInit {

  data: any;
  user:any;
  displayedColumns: string[] = ['Name','Phone', 'Button'];
  
  constructor(  private apiService: ApiService , 
    private router: Router) {
      
      this.user = apiService.getCurrentUser();

     } 
 
  ngOnInit(): void {

     /*   const userString = localStorage.getItem('user');
        if(userString == null) {
          this.router.navigate(['/login'], {queryParams: { login: 'false' } });
          return;
        }
      
        this.user = JSON.parse((userString));
        if(this.user.role != 0){    
          this.router.navigate(['/unactivated-company'], {queryParams: { permission: 'false' } });
          return;
        }*/

    this.apiService.getUnactivated().subscribe((response : any) => {
      this.data = response;
      console.log(this.data)

    });
   
  }

  activateCompany(id:any) 
  {
    console.log('aaaa')
    console.log(id)
      this.apiService.activateCompany({
        id: id,
        owner: this.user
      }).subscribe((response : any) => {
        this.ngOnInit()
      });
  }

}

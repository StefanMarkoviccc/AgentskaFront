import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.css']
})
export class UserHomePageComponent implements OnInit {

  data:any;
  user:any;
  displayedColumns: string[] = ['JobDescription', 'JobPosition', 'ActivityLog','JobConditions','View'];
    constructor(    
      private api: ApiService,
      private router: Router
          ) { }
  
    ngOnInit(): void {
      const userString = localStorage.getItem('user');
     /*     if(userString == null) {
            this.router.navigate(['/login'], {queryParams: { login: 'false' } });
            return;
          }
        
          this.user = JSON.parse((userString));
          if(this.user.role != 2){    
            this.router.navigate(['/user-home-page'], {queryParams: { permission: 'false' } });
            return;
          }*/
      this.api.getAllJobs().subscribe((response : any) => {
        this.data = response
        console.log(response)
      });

    }
  
  

}

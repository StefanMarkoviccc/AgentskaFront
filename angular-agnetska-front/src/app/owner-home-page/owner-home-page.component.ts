import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-owner-home-page',
  templateUrl: './owner-home-page.component.html',
  styleUrls: ['./owner-home-page.component.css']
})
export class OwnerHomePageComponent implements OnInit {

  user:any;
jobs:any;
apikey:any;
displayedColumns: string[] = ['JobDescription', 'JobPosition', 'ActivityLog','JobConditions'];
constructor(    private router: Router,    private apiService: ApiService

    ) { 

      this.user = this.apiService.getUserFromLocalstorage();
    }

  ngOnInit(): void {


  this.apiService.getJobsByUserId({
    id: this.user.id
  }).subscribe((response : any) => {
    console.log('aaa')
    this.jobs = response
 

  });


  this.apiService.getApiKeyByUserId(
    {
      id: this.user.id
    }
  ).subscribe((response : any) => {
    this.apikey = response;
  });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  jobId : any;
  data: any;
  user:any;
  
  displayedColumns: string[] = ['Comment', 'Salary', 'Interview','Grade'];
    constructor(
      private route: ActivatedRoute,
      private router: Router,
      public api: ApiService
      ) {


        this.route.queryParams.subscribe(params => {
          this.jobId = params['id'];
        });
       }
  
    ngOnInit(): void {
    /*  const userString = localStorage.getItem('user');
          if(userString == null) {
            this.router.navigate(['/login'], {queryParams: { login: 'false' } });
            return;
          }
        
          this.user = JSON.parse((userString));
          if(this.user.role != 2)
          {
            this.router.navigate(['/reviews'], {queryParams: { permission: 'false' } });
            return;
          }
  */
    //  const jobIdString = this.route.snapshot.queryParamMap.get('id');
     // this.jobId = parseInt(jobIdString  || '{}');



      this.api.getReviewsByJobId({
        id : this.jobId
      }).subscribe((response:any)=>
      {
        this.data = response
      });
      console.log(this.data);

    }

}

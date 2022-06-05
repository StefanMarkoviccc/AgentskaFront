import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-post-review',
  templateUrl: './post-review.component.html',
  styleUrls: ['./post-review.component.css']
})
export class PostReviewComponent implements OnInit {

  form: FormGroup;
  public loginInvalid = false;
  private formSubmitAttempt = false;
  public errorMessage : any; 
  user: any;
  jobId:any;
  job:any;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService
  ) {

    this.form = this.fb.group({
      comment: ['', Validators.required],
      salary: ['',[Validators.min(20000), Validators.max(1000000)]],
      interview: ['', Validators.required],
      grade: ['', Validators.required]

    });
    this.route.queryParams.subscribe(params => {
      this.jobId = params['id'];
    });

    this.user = api.getUserFromLocalstorage();
  }

  async ngOnInit(): Promise<void> {
    //const userString = localStorage.getItem('user');


   /*     if(userString == null) {
          this.router.navigate(['/login'], {queryParams: { login: 'false' } });
          return;
        }
      
        this.user = JSON.parse((userString));
        if(this.user.role != 2)
        {
          this.router.navigate(['/post-review'], {queryParams: { permission: 'false' } });
          return;

        }
*/
      //  const jobIdString = this.route.snapshot.queryParamMap.get('id');
      //  this.jobId = parseInt(jobIdString  || '{}');


        this.api.get({
          id:  this.jobId
        }).subscribe((response:any)=>{
          this.job = response
        });

  }

  async onSubmit(): Promise<void> {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      try {
        const comment = this.form.get('comment')?.value;
        const salary = this.form.get('salary')?.value;
        const interview = this.form.get('interview')?.value;
        const grade = this.form.get('grade')?.value;

        console.log(comment);
        console.log(this.user);
console.log('ggggg')

        this.api.addReview({
          comment: comment,
          salary: salary,
          interview: interview,
          grade: grade,
          user: this.user,
          job: this.job
         
        }).subscribe((response : any) => {
          this.router.navigate(['/user-home-page'])

        });


      } catch (err) {
        this.loginInvalid = true;
        
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }

}

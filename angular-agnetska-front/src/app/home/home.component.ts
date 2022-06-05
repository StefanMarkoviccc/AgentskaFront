import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  infoMessage: any;

  constructor(
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.infoMessage = '';
    this.route.queryParams
    .subscribe(params => {
      if(params['permission'] !== undefined && params['permission'] === 'false') {
          this.infoMessage = 'U dont have permission!';
      }
    });
    localStorage.removeItem("Token");
    localStorage.removeItem('user');
  }
}

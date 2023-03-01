import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navber',
  templateUrl: './navber.component.html',
  styleUrls: ['./navber.component.css']
})
export class NavberComponent implements OnInit {

  em_id:any;
  constructor(private router:ActivatedRoute,public ApiService:UserService)
  { this.router.params.subscribe(p => {
    this.em_id= p['em_id'];

  });
  console.log(this.em_id);}

  ngOnInit(): void {
  }

}

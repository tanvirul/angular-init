import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _router: Router, private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  getContent() {
    // this._router.navigate(['content',100],{relativeTo:this._activatedRoute})
    this._router.navigateByUrl('/admin/content/' + 100);
  }

}

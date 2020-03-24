import { Component, OnInit } from '@angular/core';
import { ApiFacultiesService } from '../api-faculties.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.css']
})
export class FacultiesComponent implements OnInit {

  constructor(private _api:ApiFacultiesService, private _router:Router) { }

  faculties = [];

  ngOnInit(): void {

    var a = this._api.getAllFaculties();
    a.subscribe(
      (res:any) => this.faculties = res.records
    );
  }

  readDetails(id) {
    this._router.navigate(['./faculty/',id]);
  }
}

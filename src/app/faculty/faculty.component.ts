import { Component, OnInit } from '@angular/core';
import { ApiFacultiesService } from '../api-faculties.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {

  constructor(private _activatedRoute:ActivatedRoute, private _api:ApiFacultiesService, private _router:Router) { }

  id = null;

  faculty : Hero = new Hero();

  ngOnInit(): void {

    this.id = this._activatedRoute.snapshot.paramMap.get('id');

    let a = this._api.getFacultyById(this.id);
    a.subscribe(
      (res:Hero) => this.faculty = res
    );
  }

  deleteFaculty() {
    this._api.deleteFaculty(this.id).subscribe(
      (res:any) => this._router.navigate(['./faculties']) 
    );
  }
  

}

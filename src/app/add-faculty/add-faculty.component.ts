import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiFacultiesService } from '../api-faculties.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrls: ['./add-faculty.component.css']
})
export class AddFacultyComponent implements OnInit {

  constructor(private _api:ApiFacultiesService, private _router:Router, private _activatedRoute:ActivatedRoute) { }

  id = null;

  faculty : Hero = new Hero();

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.paramMap.get('id'); 

    if(this.id!==null) {
    let a = this._api.getFacultyById(this.id);
    a.subscribe(
      (res:Hero) => this.faculty = res
    ); 
  }
    }

      insert(form) {
        if(this.id===null) {
          let a = this._api.insert(form);
          a.subscribe(
            (res:any) => this._router.navigate(['./faculties']) 
          );
        }
        else {
          var b = this._api.update(form,this.id); 
          b.subscribe(
            (res:any) => this._router.navigate(['./faculties'])
          );
        }
     }
  }

  



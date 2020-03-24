import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiFacultiesService {

  apiUrl = "http://scalablelabs.com/darshan_faculty/new/api.php/records/faculty/";

  constructor(private _http:HttpClient) { }

  getAllFaculties() {
    return this._http.get(this.apiUrl);
  }

  getFacultyById(id) {
    return this._http.get(this.apiUrl+""+id);
  }

  deleteFaculty(id) {
    return this._http.delete(this.apiUrl+""+id);
  }

  insert(form) {
    return this._http.post(this.apiUrl,form);
  }

  update(form,id) {
    return this._http.put(this.apiUrl+""+id,form);
  }
}

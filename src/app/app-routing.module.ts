import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultiesComponent } from './faculties/faculties.component';
import { FacultyComponent } from './faculty/faculty.component';
import { AddFacultyComponent } from './add-faculty/add-faculty.component';


const routes: Routes = [
  {path:'faculties',component:FacultiesComponent},
  {path:'faculty/:id',component:FacultyComponent},
  {path:'faculties/add',component:AddFacultyComponent},
  {path:'faculties/edit/:id',component:AddFacultyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

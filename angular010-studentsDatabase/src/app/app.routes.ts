import { Routes } from '@angular/router';
import { StudentDetailsComponent } from './component/student-details/student-details.component';
import { StudentListComponent } from './component/student-list/student-list.component';

export const routes: Routes = [
    {path: '',redirectTo:'/student',pathMatch:'full'},
    {path: 'student',component:StudentListComponent},
    {path: 'student/:id',component:StudentDetailsComponent}

];

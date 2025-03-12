import { Routes } from '@angular/router';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviesDetailsComponent } from './components/movies-details/movies-details.component';
import { MoviesError404Component } from './components/movies-error404/movies-error404.component';

export const routes: Routes = [
    {path: '',redirectTo:'/movies',pathMatch:'full'},
    {path: 'movies',component:MoviesListComponent},
    {path: 'movie/:id',component:MoviesDetailsComponent},
    {path: '**', component:MoviesError404Component}

];

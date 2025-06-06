import { Routes } from '@angular/router';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
export const routes: Routes = [

    {path: '',redirectTo:'/products',pathMatch:'full'},
    {path: 'products',component:MainpageComponent},
    {path: 'products/:id',component:ProductDetailsComponent},

];

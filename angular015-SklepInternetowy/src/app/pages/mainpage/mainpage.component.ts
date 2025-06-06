import { Component } from '@angular/core';
import { product } from '../../../../model/produkty';
import { SerwisService } from '../../../../services/serwis.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  imports: [RouterModule],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {

    products:product[]=[];
    constructor(private service:SerwisService)
    {
      this.service.getAllProducts().subscribe(data=>
      {
        this.products = data;
      });
    }
}

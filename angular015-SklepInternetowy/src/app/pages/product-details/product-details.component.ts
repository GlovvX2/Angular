import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SerwisService } from '../../../../services/serwis.service';
import { product } from '../../../../model/produkty';

@Component({
  selector: 'app-product-details',
  imports: [RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product?: product;
    constructor(private service:SerwisService,private route:ActivatedRoute )
    {
    }
    ngOnInit():void
    {
      let id = this.route.snapshot.paramMap.get("id");
      if(id)
      {
        this.service.getProductById(id).subscribe(data=> this.product = data);
      }
    }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataBase } from 'src/services/backend-service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm = new FormGroup({
    name: new FormControl(''),
    Category: new FormControl(''),
    price: new FormControl(''),
    quantity: new FormControl(''),
  })
  constructor(private database: DataBase, private router: Router){ 
  }
  
  ngOnInit(): void {
    
  }


  addProduct(f: any){
    console.log(this.productForm.value);
    // let data = {
    //   "name": this.productForm.value.name,
    //   "Category": this.productForm.value.category,
    //   "price": this.productForm.value.price,
    //   "quantity": this.productForm.value.quantity
    // }
    this.database.createProduct(this.productForm.value).subscribe(val =>{
      console.log(val);
      if(val){
        this.router.navigate(['/listProduct']);
      }
    })
    f.reset();
  }
}


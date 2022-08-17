import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataBase } from 'src/services/backend-service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  rec: String;  
  valeurs: any = [];
  products: any = [];

  constructor(private router: Router, private backend: DataBase) { 
    this.rec ='';
    this.init();
  }

  ngOnInit(): void {
    this.backend.getAllProducts().subscribe((val: any) =>{
        if(val){
          console.log(val)
          this.products = val;
          this.init();
        }
    })
  }

  addProduct(){
    this.router.navigate(['addProduct']);
  }


  init()
  {
    this.valeurs = [];
    this.valeurs = this.products;
  }

  search()
  {
    this.valeurs = this.products.filter((valeur: any) =>{
      let vag = valeur.Category;
      return vag.toLocaleLowerCase().match(this.rec.toLocaleLowerCase());
    });
  }

  clickMethod(name: number) {
    if(confirm("Voulez vous supprimer le produit id:  "+ name)) {
      this.backend.deleteProduct(name).subscribe(val =>{
        console.log(val)
      });
    }
  }
}

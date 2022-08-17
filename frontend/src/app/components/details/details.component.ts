import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { DataBase } from 'src/services/backend-service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  product = {
    name: '',
    Category: '',
    price: 0,
    quantity: 0
  };
  constructor(private database: DataBase, private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.database.getAllProducts().subscribe((val: any) =>{
      console.log(val)
      if(val){
        this.route.queryParams.subscribe(params => {
            let id = params['id'];
            const tab = val.filter((valeur: any) =>{
              if (valeur.id === id){
                return valeur;
              }
            });
            this.product = tab[0];
            console.log(this.product)
        });
      }
  })
  }

}

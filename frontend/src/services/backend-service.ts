import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from '../app/interfaces/product';

@Injectable({
    providedIn: 'root'
})

export class DataBase{

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }
    user: any;
    URL = "http://localhost:8080/api/products";

    constructor(private http: HttpClient){

    }

    getAllProducts(){
        return this.http.get<Product[]>(this.URL, this.httpOptions);
    }

    getOneProducts(id: Number){
        return this.http.get<Product>(this.URL+'/'+id, this.httpOptions);
    }

    createProduct(product: any){
        return this.http.post<Product>(this.URL, product,  this.httpOptions);
    }

    updateProduct(id: Number){
        return this.http.put<Product>(this.URL+'/'+id, this.httpOptions);
    }

    deleteProduct(id: Number){
        return this.http.delete(this.URL+'/'+id, this.httpOptions);
    }
}
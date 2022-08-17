import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { ListProductComponent } from './components/list-product/list-product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'addProduct', component: AddProductComponent },
  { path: 'viewProduct/:id', component: DetailsComponent },
  { path: 'listProduct', component: ListProductComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

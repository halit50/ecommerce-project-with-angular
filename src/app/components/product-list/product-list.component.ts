import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit, OnDestroy {

  products: Product[] = []

  isDisplayModal: boolean = false;

  modalProduct: Product | undefined;

  productSub: Subscription | undefined;

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    // this.productService.getProducts()
    // .then((products: Product[])=>{
    //   this.products = products
    // })
    // .catch(() => {
    //   this.products = []
    // })
    // //console.log(this.products);

    this.productSub = this.productService.getProducts().subscribe({
      next: (products: Product[]) => {
        this.products = products
      },
      error: (error: any) => {
        console.log("Error : ",error)
      },
      complete: () => {
        console.log('Complete')
      }
    }
    )

  }

  ngOnDestroy(): void {
    this.productSub?.unsubscribe();
  }

  getNumber(): number{
    return 3
  }

  handleDeleteProduct(product: Product){
    console.log('handleDeleteProduct', product);
    this.products = this.products.filter(p => p._id !== product._id)
  }

  handleDisplayProductViewModal(product: Product){
    if (product){
      this.isDisplayModal = true;
      this.modalProduct = product
    }
  }

  handleCloseViewModal(){
    this.isDisplayModal = false;
    this.modalProduct = undefined
  }

}

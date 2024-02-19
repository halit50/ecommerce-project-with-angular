import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  data: Number | undefined;
  second: Number | undefined;
  secondSub: Subscription | undefined;
  siteName: string = environment.siteName

  constructor(private productService: ProductService){

  }

  ngOnInit(): void {
    // this.productService.getNumber().subscribe(
    //   (value) => {
    //     this.data = value;
    //   }
    // );
    this.secondSub = this.productService.getSecond().subscribe(
      {
        next: (value: Number) => {
          this.second = value
        },
        error: (error) => {
          console.log(error)
        },
        complete: () => {
          console.log('Complete');
        }
      }
    )
  }

  ngOnDestroy(): void {
    this.secondSub?.unsubscribe()
  }



}

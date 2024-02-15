import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})
export class ProductModalComponent implements OnInit {

  @Input() product: Product | undefined;

  @Output() closeViewModal:EventEmitter<string> = new EventEmitter();

  constructor(){

  }

  ngOnInit(): void {

  }

  closeModal() {
    this.closeViewModal.emit();
  }


}

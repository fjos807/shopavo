import { Router, ActivatedRoute, Params } from "@angular/router";
import { Component, OnInit } from "@angular/core";

import { ProductService } from "../../service/product.service";
import { BusinessService } from "../../service/business.service";

import { Business } from "../../model/business";
import { Product } from "../../model/product";
import { resolve } from 'url';

@Component({
  selector: "app-store-products",
  templateUrl: "./store-products.component.html",
  styleUrls: ["./store-products.component.css"]
})
export class StoreProductsComponent implements OnInit {
  storeProducts: Product[];
  storeId: string;

  constructor(
    public productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private businessService: BusinessService
  ) {}

  ngOnInit() {
    this.getStoreName();
    this.getAllProducts();
  }

  getStoreName() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.storeId = params.get("id");
    });
    this.businessService.getBusiness(this.storeId).subscribe(res => {
      document.getElementById("storeName").innerHTML =
        '<h2 id="storeName">' + res["name"] + "</h2>";
    });
  }

  getAllProducts() {
    this.productService.getProducts()
    .subscribe(res => {
      this.productService.products = res as Product[];
    });
  }

  getStoreProducts() {
    for(let item of this.productService.products) {
      if (item.businessId.match(this.storeId)) {
        this.storeProducts.push(item);
      }
    }
    console.log(this.storeProducts);
  }
}

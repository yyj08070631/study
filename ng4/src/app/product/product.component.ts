import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products: Array<Product>

  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, '商品1', 12.23, 2.3, '我是描述我是描述我是描述我是描述', ['类别1', '类别2']),
      new Product(2, '商品2', 72.23, 4.5, '我是描述我是描述我是描述我是描述', ['类别2', '类别3']),
      new Product(3, '商品3', 1.23, 3.5, '我是描述我是描述我是描述我是描述', ['类别1', '类别2', '类别3', '类别4']),
      new Product(4, '商品4', 8.53, 1.5, '我是描述我是描述我是描述我是描述', ['类别1', '类别2']),
      new Product(5, '商品5', 167.23, 3.5, '我是描述我是描述我是描述我是描述', ['类别1', '类别2']),
      new Product(6, '商品6', 15.23, 3.5, '我是描述我是描述我是描述我是描述', ['类别1', '类别2']),
      new Product(7, '商品7', 6.23, 3.5, '我是描述我是描述我是描述我是描述', ['类别1', '类别2'])
    ]
  }

}
export class Product {
  constructor (
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {}
}
import React, { Component } from 'react';
import ProductCard from './ProductCard';


export default class ProductList extends Component {
  render() {
    console.log("this.props p-list", this.props);
    return (
      <div className="container d-flex flex-wrap justify-content-center">
        {this.props.products.map((product) =>
        <ProductCard
          key={product.id}
          addToCart={this.props.addToCart}
          {...product}
        />
        )}
      </div>

    )
  }
}

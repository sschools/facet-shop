import React, { Component } from 'react';
import ProductCard from './ProductCard';


export default class ProductList extends Component {
  render() {
    return (
      <div className="container">
        {this.props.products.map((product) =>
        <ProductCard
          key={this.props.product.id}
          addToCart={this.props.addToCart}
          {...product}
        />
        )}
      </div>

    )
  }
}

import React, { Component } from 'react';

class ProductCard extends component {
  render() {
    return (
      <div className="card">
         <img className="card-img-top" src="..." alt="Card image cap"/>
          <div class="card-body">
            <h4 class="card-title product-name">Product Name</h4>
            <p class="card-text">Price</p>
            <form placeholder="quantity"></form>
        </div>
      </div>
    )
  }
}

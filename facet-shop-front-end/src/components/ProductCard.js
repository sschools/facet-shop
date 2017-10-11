import React, { Component } from 'react';

export default class ProductCard extends Component {
  constructor(props) {
    super(props)
    this.State = {
      inputVal: ""
    }
}


  _handleSubmit = (event) => {
    event.preventDefault()
    // console.log('handling submit')
    this.props.addToCart(this.state)
  }

  _handleChange = (event) => {
    this.setState({
      inputVal: event.target.value
    })
  // this.setState({inputVal: event.target.value})
  }


  render() {
    // console.log('handling change', this.state)
    return (
      <div className="card">
         <img className="card-img-top w-50 h-50" src="http://sites.psu.edu/siowfa15/files/2015/10/stock-photo-intelligence-symbol-conceptual-design-creative-thinking-icon-isolated-on-white-background-126523163.jpg" alt="Card"/>
          <div className="card-body">
            <h4 className="card-title product-name">Product Name</h4>
            <p className="card-text">Price</p>
            <form onSubmit={this._handleSubmit}>
              <input onChange={this._handleChange} placeholder="quantity"/>
              <button type="submit" onClick={this._handleSubmit}> Add to cart</button>
            </form>
          </div>
      </div>
    );
  }
}

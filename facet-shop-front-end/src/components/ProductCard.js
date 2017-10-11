import React, { Component } from 'react';

export default class ProductCard extends Component {
  constructor(props) {
    super(props)
    this.State = {
      inputVal: ""
    }
  // _handleSubmit = (event) => {
  //   event.preventDefault()
  //   console.log('handling submit')
  // }
  _handleChange = (event) => {
  this.setState({inputVal: event.target.value})
  }


  render() {
    return (
      <div className="card">
         <img className="card-img-top" src="" alt="Card"/>
          <div className="card-body">
            <h4 className="card-title product-name">Product Name</h4>
            <p className="card-text">Price</p>
            <form >
              <input onChange={this._handleChange} value={this.state.inputVal} placeholder="quantity"/>
              <button type="submit" onClick={this.props.addToCart}> Add to cart</button>
            </form>
        </div>
      </div>
    )
  }
}

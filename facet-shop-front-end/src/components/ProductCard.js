import React, { Component } from 'react';
import '../styles/product-card.css';

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
    console.log("this.props in p-card", this.props)
    return (
      <div className="card col-3 m-3 d-flex flex-column align-items-center">
         <img className="gem-size card-img-top w-10 h-10" src={this.props.image} alt="Card"/>
          <div className="card-body">
            <h4 className="card-title product-name">Product Name: {this.props.name}</h4>
            <p className="card-text">Price:  {this.props.price}</p>
            <form onSubmit={this._handleSubmit}>
              <input className="form-control" onChange={this._handleChange} placeholder="quantity"/>
              <button type="submit" onClick={this._handleSubmit}> Add to cart</button>
            </form>
          </div>
      </div>
    );
  }
}

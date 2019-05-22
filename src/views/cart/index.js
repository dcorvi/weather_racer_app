import React, { Component } from 'react';
import './index.css';
import firebase from '../../firebase';
import ProductsTable from '../../components/productsTable';
import CheckoutTable from '../../components/checkoutTable';

let products = [
  {
    'id': 1,
    'name': 'Grapes',
    'price': 2.39
  },
  {
    'id': 2,
    'name': 'Bananas',
    'price': 4.33
  }
]


class Cart extends Component {
  constructor() {
    super();
    this.state = {
      'products': [],
      'cart': []
    }

    // upload products to firebase for reference
    firebase.database().ref('products').set(products);
  }

  componentWillMount() {
    // add firebase cart info to local cart
    const db = firebase.database().ref('cart');

    // loop through the database response
    db.on('value', response => {
      let data = response.val();

      let cart = [];

      for (let i in data) {
        cart.push(data[i]);
      }

      // push new cart variable into local state
      this.setState({ 'cart': cart });
    });

    this.setState({ 'products': products });
  }

  addItem = id => {
    let cart = this.state.cart;

    for (let i in products) {
      if (products[i].id === id) {
        cart.push(products[i]);
        break;
      }
    }

    this.setState({ 'cart': cart });

    // add new cart to firebase
    firebase.database().ref('cart').set(cart);
  }

  removeItem = id => {
    let cart = this.state.cart;

    for (let i in cart) {
      if (cart[i].id === id) {
        cart.splice(i, 1);
        break;
      }
    }
    // console.log(id);
    this.setState({ cart });

    firebase.database().ref('cart').set(cart);
  }

  render() {
    return (
      <div className="container">
        <ProductsTable products={this.state.products} addItem={this.addItem} />
        <CheckoutTable cart={this.state.cart} removeItem={this.removeItem} />
      </div>
    );
  }
}

export default Cart;

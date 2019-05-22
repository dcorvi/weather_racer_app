import React, { Component } from 'react';
import './index.css';
import TableItem from '../tableItem';

class CheckoutTable extends Component {
  calcTotal = (cart) => {
    let total = 0;

    for (let i in cart) {
      total += cart[i].price;
    }
    return total.toFixed(2);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <h1>Checkout Section</h1>
          <table className="table table-dark">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Remove Item Button</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.cart[0] &&
                  this.props.cart.map( item =>
                    <TableItem key={item.id} btn_class={'btn btn-danger'} item={item} task={this.props.removeItem} term={"Remove from"} />
                  )
              }
            </tbody>
            <tfoot>
              <tr>
                <th>Total:</th>
                <th colSpan="2">${this.calcTotal(this.props.cart)}</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

export default CheckoutTable;

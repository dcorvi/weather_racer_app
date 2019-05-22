import React, { Component } from 'react';
import './index.css';
import TableItem from '../tableItem';

class ProductsTable extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <h1>Product Section</h1>
          <table className="table table-dark">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Add Item Button</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.products[0] &&
                  this.props.products.map( item =>
                    <TableItem btn_class={'btn btn-success'} item={item} task={this.props.addItem} term={"Add to"} />
                  )
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ProductsTable;

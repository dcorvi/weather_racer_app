import React, { Component } from 'react';
import './index.css';

class TableItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.item.name}</td>
        <td>${this.props.item.price}</td>
        <td>
          <button onClick={() => this.props.task(this.props.item.id)} className={this.props.btn_class}>{this.props.term} Cart</button>
        </td>
      </tr>
    );
  }
}

export default TableItem;

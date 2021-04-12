import React from 'react';
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
  myInput = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    const storeName = this.myInput.current.value;
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} className="store-selector">
          <h2>Please enter a store</h2>
          <input
            type="text"
            ref={this.myInput}
            onChange={this.handleChange}
            required placeholder="Store Name"
            defaultValue={getFunName()}></input>
          <button type="submit">Visit Store</button>
        </form>
      </>
      )
  }
}

export default StorePicker;


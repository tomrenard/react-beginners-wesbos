import React from 'react';
import PropTypes from 'prop-types';

class EditFishForm extends React.Component {
  static propTypes = {
    deleteFish: PropTypes.func,
    updateFish: PropTypes.func,
    index: PropTypes.string,
    fish: PropTypes.shape({
        image: PropTypes.string,
        name: PropTypes.string,
        desc: PropTypes.string,
        status: PropTypes.string,
        price: PropTypes.number,
    })
  }
  handleChange = (e) => {
    const updatedFish = { ...this.props.fish,
      [e.currentTarget.name]: e.currentTarget.value
    };
    this.props.updateFish(this.props.index, updatedFish);
  }
  render() {
    if (!this.props.fish) return null;
    return (
      <div className="fish-edit">
        <input name="name" type="text" onChange={this.handleChange} value={this.props.fish.name} />
        <input name="price" type="text" onChange={this.handleChange} value={this.props.fish.price} />
        <select name="status" onChange={this.handleChange} value={this.props.fish.status}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold out!</option>
        </select>
        <textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc} />
        <input name="image" onChange={this.handleChange} type="text" value={this.props.fish.image} />
        <button onClick={() => this.props.deleteFish(this.props.index)}>Remove fish</button>
      </div>
    )
  }
}

export default EditFishForm;

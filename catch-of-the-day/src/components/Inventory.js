import React from 'react';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';
import PropTypes from 'prop-types';

class Inventory extends React.Component {
  static propTypes = {
    fishes: PropTypes.shape({
      fish: PropTypes.shape({
        image: PropTypes.string,
        name: PropTypes.string,
        desc: PropTypes.string,
        status: PropTypes.string,
        price: PropTypes.number,
      })
    }),
    addFish: PropTypes.func,
    updateFish: PropTypes.func,
    loadSampleFishes: PropTypes.func,
    deleteFish: PropTypes.func,
  };
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(key => <EditFishForm updateFish={this.props.updateFish} index ={key} key={key} fish={this.props.fishes[key]} deleteFish={this.props.deleteFish} />)}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>
          Load samples
        </button>
      </div>
    );
  }
}

export default Inventory;

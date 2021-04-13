import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';


class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };
  componentDidMount() {
    const { match } = this.props;
    const localStorageRefOrder = localStorage.getItem(match.params.storeId);
    const localStorageRefFishes = localStorage.getItem(match.url);
    if (localStorageRefFishes) {
      this.setState({
        fishes: JSON.parse(localStorageRefFishes)
      });
    };
    if (localStorageRefOrder) {
      this.setState({
        order: JSON.parse(localStorageRefOrder)
      });
    };
  }
  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order));
    localStorage.setItem(
      this.props.match.url,
      JSON.stringify(this.state.fishes));
  }
  addFish = fish => {
    const fishes = { ...this.state.fishes };
    fishes[`fish${Date.now()}`] = fish;
    this.setState({
      fishes: fishes
    });
  };
  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes
    });
  };
  addToOrder = (key) => {
    const order = { ...this.state.order};
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key =>
              <Fish addToOrder={this.addToOrder} index={key} key={key} details={this.state.fishes[key]} />)}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
      </div>
    );
  }
}

export default App;

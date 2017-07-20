import React from 'react';

import FruitBasket from './FruitBasket';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }

  fetchFruit = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruit()
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  handleChange = (event) => {
    const newSelection = event.target.value
    this.setState({
      currentFilter: newSelection
    })
  }

  render() {
    return (
        <FruitBasket filters={this.state.filters} fruit={this.state.fruit} currentFilter={this.state.currentFilter} updateFilterCallback={this.handleChange} />
    )
  }
}


// const App = () => <FruitBasket />;

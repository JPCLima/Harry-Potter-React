import { React, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { CardList } from './components/cardList/card-list.component';
import { SearchBox } from './components/searchBox/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      charactersList: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://hp-api.herokuapp.com/api/characters')
      .then((response) => response.json())
      .then((characters) => this.setState({ charactersList: characters }));
  }

  handleChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { charactersList, searchField } = this.state;
    const filterChar = charactersList.filter((character) =>
      character.name.toLowerCase().includes(searchField.toLowerCase()),
    );

    return (
      <div className="App">
        <SearchBox
          placeholder="Input the character name"
          handleChange={this.handleChange}
        />
        <CardList characters={filterChar} />
      </div>
    );
  }
}

export default App;

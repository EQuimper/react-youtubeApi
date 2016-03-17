import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar.jsx'
const API_KEY = 'AIzaSyDW0PS3mvaWvAvcIHWGwFzDuyd7MudMVFU';


class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos: [ ] };

    YTSearch({ key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos }); // this.setState({ videos: videos });
    });
  }

  render(){
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}



ReactDOM.render(<App />, document.querySelector('.container'));

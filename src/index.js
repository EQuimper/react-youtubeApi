import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar.jsx';
import VideoList from './components/VideoList.jsx';
import VideoDetail from './components/VideoDetail.jsx';
const API_KEY = 'AIzaSyDW0PS3mvaWvAvcIHWGwFzDuyd7MudMVFU';

const styles = {
  title: {
    textAlign: 'center',
    marginTop: '20px'
  }
};

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('trick2g');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      }); // this.setState({ videos: videos });
    });
  }

  render(){
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term)
    }, 300);

    return (
      <div>
        <h1 style={styles.title}>Youtube Api With React</h1>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos} />
      </div>
    );
  }
}



ReactDOM.render(<App />, document.querySelector('.container'));

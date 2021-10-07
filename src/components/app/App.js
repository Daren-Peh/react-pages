import React from 'react';
import './App.css';
import {SearchBar} from '../search-bar/search-bar.component';
import {SearchResults} from '../search-results/search-results.component';
import {PlayList} from '../playlist/playlist.component';
import { Spotify } from '../../util/spotify';

export class App extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        searchResults: [],
        playlistName: '',
        playlistTracks: []
      }
      this.addTrack = this.addTrack.bind(this);
      this.removeTrack = this.removeTrack.bind(this);
      this.updatePlaylistName = this.updatePlaylistName.bind(this);
      this.savePlaylist = this.savePlaylist.bind(this); 
      this.search = this.search.bind(this);
    }

      addTrack (track) {
        let currentTracks = this.state.playlistTracks;
        if (currentTracks.find(savedTrack => savedTrack.id === track.id)) {
          return;
        } 
        currentTracks.push(track);
        this.setState({playlistTracks: currentTracks})
        
      }


       removeTrack(track){
        let currentTracks = this.state.playlistTracks;
        let updatedTracks = currentTracks.filter(selectedTrack => selectedTrack.id !== track.id);
        this.setState({playlistTracks: updatedTracks})
      }

      updatePlaylistName (name){
        this.setState({playlistName: name})
      }
      savePlaylist (){
        const trackURIs = this.state.playlistTracks.map(track => track.uri)
        Spotify.savePlaylist(this.state.playlistName, trackURIs);
        this.setState({playlistName: 'New Playlist', playlistTracks: []});
      }

      search(searchTerm){
        Spotify.search(searchTerm).then(fetchedData => {
          this.setState({searchResults: fetchedData})
        })
      }
  

  render(){
    return (
      <div className="App">
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
     
        <SearchBar onSearch={this.search}/>
        <div className="App-playlist">
          <SearchResults
            searchResults = {this.state.searchResults}
            onAdd = {this.addTrack} />
          <PlayList
            playlistName = {this.state.playlistName}
            playlistTracks = {this.state.playlistTracks}
            onNameChange = {this.updatePlaylistName}
            onRemove = {this.removeTrack}
            onSave = {this.savePlaylist}
            />
            
        </div>
      </div>
    );
  }    
  
}

export default App;



import React from 'react';
import {TrackList} from '../track-list/track-list.component';
import './search-results.styles.css'

export class SearchResults extends React.Component {
    render(){
        return (
            <div className="SearchResults">
                <h2>Results</h2>
            <TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd} isRemoval={false}/>
    
            </div>
        );
    }

}

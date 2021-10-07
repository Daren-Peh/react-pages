import React from 'react';
import './track-list.styles.css';
import {Track} from '../track/track.component';


export class TrackList extends React.Component {
    
    
    render(){
        let  tracks = this.props.tracks;
        return (
            <div className="TrackList">
            {
                tracks.map(track => {
                    return (
                        <Track
                        key={track.id}
                        track={track}
                        onAdd={this.props.onAdd}
                        onRemove={this.props.onRemove}
                        isRemoval={this.props.isRemoval}     
                        />)
                })
            }
            </div>
            
        )

    }


}



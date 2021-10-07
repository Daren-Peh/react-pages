import React from 'react';
import './track.styles.css';


// export const Track1 = ({name, artist, album,action}) => {
//     return (

//     <div className="Track">
//         <div className="Track-information">
//             <h3>{name}</h3>
//             <p>{artist}{album}</p>
//         </div>
//     {/* <!-- + or - will go here --> */}
//         <button className="Track-action">{action}</button>
//     </div>
//     )


// }
export class Track extends React.Component {
    constructor(props){
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    renderAction(){
        if (this.props.isRemoval){
             return (<button className="Track-action"
             onClick={this.removeTrack}
         > - </button>)
        } else{
            return (<button className="Track-action"
            onClick={this.addTrack}
        > + </button>)
        }
    }

    addTrack(){
        this.props.onAdd(this.props.track);
    }

    removeTrack(){
        this.props.onRemove(this.props.track);
    }

    render(){
        const {name, artist, album} = this.props.track; 
        return(
            <div className="Track">
                <div className="Track-information">
                    <h3>{name}</h3>
                    <p>{artist} | {album}</p>
                </div>
            <button className="Track-action">
            
            {this.renderAction()}</button>
        </div>
        )

    }


}
import React, { Component } from 'react';
import ReactPlayer from 'react-player'


class MediaPlayer extends Component {

    playerStyle = {
        margin: 'auto',
        padding: '20px',
        align: 'center'
    }

    render() {
        return (
            <div>
            <ReactPlayer 
            style={this.playerStyle} 
            url= {`https://www.youtube.com/watch?v=${this.props.videoId}`}
            controls={true}
             />
            </div>
        );
    }
}

export default MediaPlayer;
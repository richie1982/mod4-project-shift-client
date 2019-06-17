import React, { Component } from 'react';

class Song extends Component {

    
    render() {
        const { handleSelection, id, result } = this.props
        return (
            <div onClick={() => handleSelection(id.videoId, result)}>
                <li >{result}</li>
            </div>
        );
    }
}

export default Song;
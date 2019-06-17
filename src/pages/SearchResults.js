import React, { Component } from 'react';
import Song from '../components/Song'

class SearchResults extends Component {
    render() {
        return (
            <div>
               <ul>
               {this.props.results.map((result, index) => <Song id={result.id} result={result.snippet.title} key={index} handleSelection={this.props.handleSelection}/>)}
               </ul>
            </div>
        );
    }
}

export default SearchResults;
import React, { Component } from 'react';
import { userInventory } from '../services/api'
import SearchResults from '../pages/SearchResults'
import SearchAppBar from './Header';
import SongTable from './SongTable'
import MediaCard from './MediaCard'
import { fetchSearch } from '../services/api'
import Backdrop from '@material-ui/core/Backdrop';


class Landing extends Component {

    state = {
        inventory: [],
        searchTerm: '',
        trackUrl: '',
        videoId: '',
        searchActive: false,
        results: [],
        selectedTitle: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetchSearch(this.state.searchTerm)
            .then(data => this.setState({results: data.items}))
        this.setSearchActive()
    }

    handleSelection = (id, title) => {
        this.setState({
            videoId: id,
            selectedTitle: title
        })
    }

    setSearchTerm = (text) => {
        this.setState({searchTerm: text})
    }

    setSearchActive = () => {
        this.setState({ searchActive: true })
    }

    setVideoId = (text) => {
        this.setState({videoId: text})
    }

    setInventory = () => {
        userInventory()
        .then(data => {
            if (data.error) {
                alert(data.error)
            } else {
                this.setState({inventory: data})
            }
        })
    }

    componentDidMount () {
        if (!this.props.user) {
            this.props.history.push('/log_in')
        } else {
            this.setInventory()
        }


    }
    render() {
        const { inventory } = this.state
        // console.log('props:', this.props)
        return (
            <div>
                <div className="Navbar">
                    <SearchAppBar handleSubmit={this.handleSubmit} props={this.props} setSearchTerm={this.setSearchTerm} user={this.props.user} signOut={this.props.signOut}/>
                </div>
                <div className="h1Text">
                    {this.props.user &&
                        <h1>Welcome back {this.props.user}</h1>
                    }
                </div>
                <div>
                    {this.state.searchActive
                    ? <SearchResults results={this.state.results} handleSelection={this.handleSelection}/> 
                    : null
                    }
                </div>
                <div>
                    <MediaCard videoId={this.state.videoId} title={this.state.selectedTitle}/>
                </div>
                <div>
                    <SongTable inventory={inventory}/>
                </div>
                {inventory.length === 0 &&
                    <p>No songs in your directory</p>}
            </div>
        );
    }
}

export default Landing;
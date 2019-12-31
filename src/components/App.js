import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import key from '../key/key'


class App extends React.Component {
    state = { images: [] };
    onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos/', {
            params: { query: term },
            headers: {
                Authorization: key
            }
        });
        this.setState({ images: response.data.results })
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images}></ImageList>
            </div>
        )
    }
}

export default App;
import React, {Component} from 'react';

class SearchBox extends Component {
    render() {
        return (
            <div className='searchbox'>
                <div className='blog-name'>
                    <label>Blog Name:</label>
                    <input type="text" value=""/>
                </div>
                <div className='tag-name'>
                    <label>Tag:</label>
                    <input type="text" value=""/>
                </div>
                <div className='clear'></div>
                <button
                    className='button search-button'
                    onClick={this.handleSearch}>
                    Search
                </button>
            </div>
        );
    };
}

export default SearchBox;

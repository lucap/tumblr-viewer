import React, {Component} from 'react';

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogName: '',
            tagName: ''
        }
    }

    onSubmit = () => {
        const {blogName, tagName} = this.state;
        this.props.onSearch(blogName, tagName);
    }

    onChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    onKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.onSubmit();
        }
    }

    render() {
        return (
            <div className='searchbox'>
                <div className='blog-name'>
                    <label>Blog Name:</label>
                    <input
                        type="text"
                        name="blogName"
                        value={this.state.blogName}
                        onChange={this.onChange}
                        onKeyPress={this.onKeyPress}
                    />
                </div>
                <div className='tag-name'>
                    <label>Tag:</label>
                    <input
                        type="text"
                        name="tagName"
                        value={this.state.tagName}
                        onChange={this.onChange}
                        onKeyPress={this.onKeyPress}
                    />
                </div>
                <div className='clear'></div>
                <button
                    className='button search-button'
                    onClick={this.onSubmit}>
                    Search
                </button>
                <div className='clear'></div>
            </div>
        );
    };
}

export default SearchBox;

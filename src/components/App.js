import React, {Component} from 'react';
import {render} from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions';
import SearchBox from './SearchBox';
import PostList from './PostList';


class App extends Component {
    onSearch = (blogName, tagName) => {
        this.props.actions.fetchPosts(blogName, tagName);
    }

    onAdd = (post) => {
        this.props.actions.addFavorite(post);
    }

    onRemove = (post) => {
        this.props.actions.removeFavorite(post.id);
    }

    render() {
        const {searchResults, favorites} = this.props;

        return (
            <div className='column-wrapper'>
                <div className='column left'>
                    <SearchBox onSearch={this.onSearch}/>
                    <div className='separator'/>
                    {
                        searchResults
                        ? (
                            <PostList
                                posts={searchResults}
                                buttonText='Add'
                                onButtonPress={this.onAdd}
                            />
                        )
                        : null
                    }
                </div>
                <div className='column right'>
                    <div className='favorites-label'>Favorites:</div>
                    {
                        favorites
                        ? (
                            <PostList
                                posts={favorites}
                                buttonText='Remove'
                                onButtonPress={this.onRemove}
                            />
                        )
                        : null
                    }
                </div>
            </div>
        );
    };
}

function mapStateToProps(state) {
  return {
    favorites: state.favorites,
    searchResults: state.searchResults,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

import React, {Component} from 'react';
import {render} from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions';
import SearchBox from './SearchBox';


class App extends Component {
    handleSearch = () => {
        this.props.actions.fetchPosts('americorp');
    }

    render() {
        return (
            <div className='column-wrapper'>
                <div className='column left'>
                    <SearchBox/>
                </div>
                <div className='column right'>
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

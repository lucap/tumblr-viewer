import React, {Component} from 'react';
import {render} from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions';


class App extends Component {
    handleSearch = () => {
        this.props.actions.search('americorp');
    }

    render() {
        return (
            <div className='column-wrapper'>
                <div className='column left'>
                    <button className='btn'>Blog Name</button>
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

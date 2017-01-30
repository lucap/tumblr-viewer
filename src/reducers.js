import _ from 'lodash';

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return {}

    case 'REMOVE_FAVORITE':
      return {}

    case 'LOADING_POSTS':
      return Object.assign({}, state, {
        favorites: ['here']
      })

    case 'POSTS_LOADED':
      return _.assign({}, state, {
        searchResults: action.data.response.posts
      })

    default:
      return state
  }
}

export default rootReducer;

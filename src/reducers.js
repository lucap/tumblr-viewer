

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return {}

    case 'REMOVE_FAVORITE':
      return {}

    case 'LOADING_POSTS':
      console.log('loading');
      return Object.assign({}, state, {
        favorites: ['here']
      })

    case 'POSTS_LOADED':
      console.log('loaded', action);
      return Object.assign({}, state, {
        searchResults: ['there']
      })

    default:
      return state
  }
}

export default rootReducer;

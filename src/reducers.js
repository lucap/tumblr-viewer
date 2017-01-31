import _ from 'lodash';


const containsById = (collection, id) => {
  return Boolean(_.find(collection, (item) => {
    return item.id === id
  }))
}

const rootReducer = (state = {}, action) => {
  const {favorites} = state;
  const {type, data, item, itemId} = action;

  switch (type) {
    case 'ADD_FAVORITE':
      if (containsById(favorites, item.id)) {
        return state;
      }

      return _.assign({}, state, {
        favorites: _.concat([item], favorites)
      })

    case 'REMOVE_FAVORITE':
      return _.assign({}, state, {
        favorites: _.filter(favorites,
          (item) => {return item.id !== itemId}
        )
      })

    case 'POSTS_LOADING':
      return _.assign({}, state, {
        isLoading: true
      })

    case 'POSTS_LOADED':
      return _.assign({}, state, {
        searchResults: data.response.posts,
        isLoading: false
      })

    default:
      return state
  }
}

export default rootReducer;

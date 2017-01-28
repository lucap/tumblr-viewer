

const reducers = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return {}

    case 'REMOVE_FAVORITE':
      return {}

    case 'SEARCH':
      console.log('reducer');
      return Object.assign({}, state, {
        favorites: ['1']
      })

    default:
      return state
  }
}

export default reducers;

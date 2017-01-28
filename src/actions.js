

export const addFavorite = (item) => {
  return {
    type: 'ADD_FAVORITE',
    item,
  }
}

export const removeFavorite = (item_id) => {
  return {
    type: 'ADD_FAVORITE',
    item_id,
  }
}

export const search = (blogname, tag) => {
  console.log('action search');
  return {
    type: 'SEARCH',
    blogname,
    tag,
  }
}




export const addFavorite = (item) => {
  return {
    type: 'ADD_FAVORITE',
    item,
  }
}

export const removeFavorite = (item_id) => {
  return {
    type: 'REMOVE_FAVORITE',
    item_id,
  }
}

export const search = (blogname, tag) => {
  return {
    type: 'SEARCH',
    blogname,
    tag,
  }
}


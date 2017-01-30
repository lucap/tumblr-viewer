import fetchJsonp from 'fetch-jsonp';

const API_KEY = 'u1VllcnhGaN8UgLgplYlHMmdC5Y8uxxtoPdV4vnu8vO11CaK2i';

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

export const fetchPosts = (blogName, tag) => {
    return dispatch => {
        dispatch({type: 'POSTS_LOADING'});
        return fetchJsonp(`https://api.tumblr.com/v2/blog/${blogName}/posts?api_key=${API_KEY}&limit=20&offset=0`)
            .then(response => response.json())
            .then(json => dispatch({
                type: 'POSTS_LOADED',
                data: json,
            }))
            .catch(err => {
                dispatch({type: 'POSTS_ERROR'});
                console.log('Fetch Error: ', err);
            })
    }
}



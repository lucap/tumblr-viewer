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
    console.log('--->', blogName, tag);
    return dispatch => {
        dispatch({type: 'POSTS_LOADING'});
        return fetchJsonp(`https://api.tumblr.com/v2/blog/peacecorps/info?api_key=${API_KEY}`)
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



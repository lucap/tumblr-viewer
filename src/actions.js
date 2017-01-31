import _ from 'lodash';
import fetchJsonp from 'fetch-jsonp';

const API_KEY = 'u1VllcnhGaN8UgLgplYlHMmdC5Y8uxxtoPdV4vnu8vO11CaK2i';
const URL_ROOT = 'https://api.tumblr.com/v2'

const getUrl = (blogName, tag) => {
    switch (true) {
        case (blogName.length > 0 && tag.length > 0):
            return `${URL_ROOT}/blog/${blogName}/posts?tag=${tag}&api_key=${API_KEY}`;
        case (blogName.length > 0):
            return `${URL_ROOT}/blog/${blogName}/posts?api_key=${API_KEY}`;
        case (tag.length > 0):
            return `${URL_ROOT}/tagged?tag=${tag}&api_key=${API_KEY}`;
    }
}

export const addFavorite = (item) => {
    return {
        type: 'ADD_FAVORITE',
        item,
    }
}

export const removeFavorite = (itemId) => {
    return {
        type: 'REMOVE_FAVORITE',
        itemId,
    }
}

export const fetchPosts = (blogName, tag) => {
    return dispatch => {
        dispatch({type: 'POSTS_LOADING'});
        return fetchJsonp(getUrl(blogName, tag))
            .then(response => response.json())
            .then(json => dispatch({
                type: 'POSTS_LOADED',
                // the response schema for /blog and /tagged is slightly different
                data: json.response.posts || json.response
            }))
            .catch(err => {
                dispatch({type: 'POSTS_ERROR'});
                console.log('Fetch Error: ', err);
            })
    }
}



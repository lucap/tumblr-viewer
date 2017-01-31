# tumblr-viewer

Tumblr Blog viewer with favoriting (toy project)

[Live Demo](https://lucap.github.io/tumblr-viewer/)

Stack:
* webpack
* es6
* react
* redux

## Develop

```
npm install
webpack-dev-server --progress --colors
open http://localhost:8080
```

## 'Production' build and deploy

```
webpack -p
git commit 
git push
```

## Future Developments 

* Responsive design for mobile web
* Support pagination or infinite load (search results and favorites)
* For photo posts, we should pick the smallest size that would fill the post window (e.i. not the large original)
* When posts contain raw html, we should sanitize or contain in an iframe
* Persist favorites (e.i. the state) on the client in local storage

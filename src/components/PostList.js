import React, {Component} from 'react';
import _ from 'lodash';

import Post from './Post';

class PostList extends Component {
    render() {
        const {posts} = this.props;
        return (
            <div className='post-list'>
                {
                    _.map(posts, (post) => {
                        return (
                            <Post key={post.id} post={post}/>
                        )
                    })
                }
            </div>
        );
    };
}

export default PostList;

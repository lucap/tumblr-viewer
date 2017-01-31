import React, {Component} from 'react';
import _ from 'lodash';

import Post from './Post';

class PostList extends Component {
    render() {
        const {posts, buttonText, onButtonPress} = this.props;
        return (
            <div className='post-list'>
                {
                    _.map(posts, (post) => {
                        return (
                            <Post
                                key={post.id}
                                post={post}
                                buttonText={buttonText}
                                onButtonPress={onButtonPress}
                            />
                        )
                    })
                }
            </div>
        );
    };
}

export default PostList;

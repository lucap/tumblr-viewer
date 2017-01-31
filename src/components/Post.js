import React, {Component} from 'react';

// Functions to render each type of post

const photo = ({photos, caption}) => (
    <div>
        <div dangerouslySetInnerHTML={{__html: caption}}></div>
        <img src={photos[0].original_size.url}/>
    </div>
);

const text = ({title, body}) => (
    <div>
        <div>{title}</div>
        <div className='shorten' dangerouslySetInnerHTML={{__html: body}}></div>
    </div>
);

const link = ({title, url}) => (
    <div>
        <a href={url}>{title}</a>
    </div>
);

const quote = ({text, source}) => (
    <div>
        <div>{text}</div>
        <div dangerouslySetInnerHTML={{__html: source}}></div>
    </div>
);

const chat = ({title, body}) => (
    <div>
        <div>{title}</div>
        <div className='shorten' dangerouslySetInnerHTML={{__html: body}}></div>
    </div>
);

const audio = ({caption, player}) => (
    <div>
        <div dangerouslySetInnerHTML={{__html: caption}}></div>
        <div className='player' dangerouslySetInnerHTML={{__html: player}}></div>
    </div>
);

const video = ({caption, player}) => (
    <div>
        <div dangerouslySetInnerHTML={{__html: caption}}></div>
        <div className='player' dangerouslySetInnerHTML={{__html: player[0].embed_code}}></div>
    </div>
);

const answer = ({question, answer}) => (
    <div>
        <div dangerouslySetInnerHTML={{__html: question}}></div>
        <div dangerouslySetInnerHTML={{__html: answer}}></div>
    </div>
);

const postTypeMap = {
    photo: photo,
    text: text,
    link: link,
    quote: quote,
    chat: chat,
    audio: audio,
    video: video,
    answer: answer,
};

class Post extends Component {
    render() {
        const {post, buttonText, onButtonPress} = this.props;
        return (
            <div className='post'>
                <div className='post-action-button'>
                    <button
                        className='button'
                        onClick={this.onButtonPress}>
                        {'Add'}
                    </button>
                </div>
                <div>{React.createElement(postTypeMap[post.type], post)}</div>
            </div>
        );
    };
}


export default Post;

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
        <div>{caption}</div>
        <div dangerouslySetInnerHTML={{__html: player}}></div>
    </div>
);

const video = ({caption, player}) => (
    <div>
        <div>{caption}</div>
        <div dangerouslySetInnerHTML={{__html: player}}></div>
    </div>
);

const answer = ({question, answer}) => (
    <div>
        <div>{question}</div>
        <div>{answer}</div>
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
        const {post} = this.props;
        return (
            <div className='post'>
                <div>{React.createElement(postTypeMap[post.type], post)}</div>
            </div>
        );
    };
}


export default Post;

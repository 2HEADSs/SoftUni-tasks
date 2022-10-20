import { appendPost } from "./appendPosts.js";

const topicNameElement = document.getElementById('topicName');
const userNameElement = document.getElementById('username');
const postTextElement = document.getElementById('postText');
let postTopicUrl = 'http://localhost:3030/jsonstore/collections/myboard/posts'


export function post(e) {
    e.preventDefault()
    const topicText = topicNameElement.value;
    const user = userNameElement.value;
    const postText = postTextElement.value;
    if (topicText !== ''
        && user !== ''
        && postText !== '') {

        fetch(postTopicUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application.json',
            },
            body: JSON.stringify({
                topicText,
                user,
                postText
            })
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('id', user._id);
                appendPost(data._id);

            })
    }
    topicNameElement.value = '';
    userNameElement.value = '';
    postTextElement.value = '';

}

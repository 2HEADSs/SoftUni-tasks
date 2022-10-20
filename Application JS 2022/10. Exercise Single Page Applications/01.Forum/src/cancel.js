const topicNameElement = document.getElementById('topicName');
const userNameElement = document.getElementById('username');
const postTextElement = document.getElementById('postText');

export function cancel(e) {
    e.preventDefault()
    topicNameElement.value = '';
    userNameElement.value = '';
    postTextElement.value = '';
}
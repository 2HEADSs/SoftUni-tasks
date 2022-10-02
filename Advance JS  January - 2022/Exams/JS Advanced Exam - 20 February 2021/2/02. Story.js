class Story {

    #likes;
    #comments;

    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this.#comments = [];
        this.#likes = []
    }

    get likes() {
        if (this.#likes.length === 0) {
            return `${this.title} has 0 likes`;
        }
        if (this.#likes.length === 1) {
            return `${this.#likes[0]} likes this story!`;
        }

        return `${this.#likes[0]} and ${this.#likes.length - 1} others like this story!`;
    }
    like(username) {
        if (this.#likes.includes(username)) {
            throw new Error(`You can't like the same story twice!`)
        }
        if (username === this.creator) {
            throw new Error(`You can't like your own story!`)
        }

        this.#likes.push(username)
        return `${username} liked ${this.title}!`
    }

    dislike(username) {
        let indexOfUser = this.#likes.indexOf(username);

        if (indexOfUser === -1) {
            throw new Error(`You can't dislike this story!`)
        } else {
            this.#likes.splice(indexOfUser, 1);
            return `${username} disliked ${this.title}`
        }

    }
    comment(username, content, id) {
        id = Number(id);

        if (id == undefined || !this.#comments.some(x => x.id === id)) {
            let newComent = {
                id: this.#comments.length + 1,
                username,
                content,
                replies: []
            }
            this.#comments.push(newComent);

            return `${username} commented on ${this.title}`
        }

        let currentComment = this.#comments.find(c => c.id === id);

        if (currentComment) {
            let replay = {
                id: `${currentComment.id}.${currentComment.replies.length + 1}`,
                username,
                content
            }
            currentComment.replies.push(replay)
            return `You replied successfully`
        }

    }
    toString(sortingType) {
        let result = [];

        result.push(`Title: ${this.title}`)
        result.push(`Creator: ${this.creator}`)
        result.push(`Likes: ${this.likes.length}`)
        result.push(`Comments:`);

        if (sortingType === 'asc') {
            this.#comments.sort((a, b) => a.id - b.id).forEach(c => {
                c.replies.sort((a, b) => a.id - b.id)
            })
        } else if (sortingType === 'desc') {
            this.#comments.sort((a, b) => b.id - a.id).forEach(c => {
                c.replies.sort((a, b) => b.id - a.id)
            })
        } else if (sortingType === 'username') {
            this.#comments.sort((a, b) => a.username.localeCompare(b.username))
                .forEach(c => {
                    c.replies.sort((a, b) => a.username.localeCompare(b.username));
                });
        }
        this.#comments.forEach(c => {
            result.push(`-- ${c.id}. ${c.username}: ${c.content}`);

            c.replies.forEach(r => {
                result.push(`--- ${r.id}. ${r.username}: ${r.content}`);
            })
        })

        return result.join('\n')
    }
}
let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));

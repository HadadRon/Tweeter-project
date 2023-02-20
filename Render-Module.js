const RenderModule = function () {
    
    const renderPost = (posts) => {
        const container = $('#posts');
        container.empty();
        posts.forEach(post => {
            container.append(`
                <div class="post-box" id="${post.id}">
                    <div>${ post.text }</div><br>
                    <input class="comment">
                    <button class="add-comment">Add comment</button>
                    <div class="comments"></div><br>
                </div>
            `);
    
            if (post?.comments?.length) {
                renderComment(post.id, posts);
            }
        });
    };

    const renderComment = (postId, posts) => {
        const currentPost = posts.find(post => post.id === postId);
        if (currentPost) {
            console.log(currentPost.comments);
            const commentsBox = $(`#${postId} .comments`);
            commentsBox.empty();
            currentPost.comments.forEach(comment => {
                commentsBox.append(`
                    <div class="comment" data-id="${comment.id}"><i>${comment.text}</i></div>
                `);
            });
        }
    };
    return {renderPost}
}
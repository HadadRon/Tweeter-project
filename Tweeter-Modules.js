const tweeterModules = function () {

  const posts = [
    {
      text: "First post!",
      id: "p1",
      comments: [
        { id: "c1", text: "First comment on first post!" },
        { id: "c2", text: "Second comment on first post!!" },
        { id: "c3", text: "Third comment on first post!!!" },
      ],
    },
    {
      text: "Aw man, I wanted to be first",
      id: "p2",
      comments: [
        {
          id: "c4",
          text: "Don't wory second poster, you'll be first one day.",
        },
        { id: "c5", text: "Yeah, believe in yourself!" },
        { id: "c6", text: "Haha second place what a joke." },
      ],
    },
    {
      text: "Third post! better than being last",
      id: "p3",
      comments: [],
    },
  ];

  let postIdCounter = 3;
  let commentIdCounter = 6;

  const getPosts = function () {
    return posts;
  };
  const addPost = function (text) {
    postIdCounter++;
    let post = {
      text: text,
      id: "p" + postIdCounter,
      comments:[],
    };
    posts.push(post);
  };
  const removePost = function (postId) {
    for (let index in posts) {
      console.log(posts[index].id);
      if (posts[index].id == postId) {
        posts.splice(index, 1);
      }
    }
  };
  const addComment = function (comment, postId) {  
    for (let post of posts) {
      console.log(postId)
      if (post.id == postId) {
        commentIdCounter++;
        post.comments.push({ id: `c${commentIdCounter}`, text: comment });
      }
      console.log(post.comments)
    }
  };
  const removeComment = function (postId, commentId) {
    for (let post of posts) {
      if (post.id == postId) {
        for (let index in post.comments) {
          if (post.comments[index].id == commentId) {
            post.comments.splice(index, 1);
          }
        }
      }
    }
  };
  return {addPost, getPosts, removePost, addComment, removeComment};
};
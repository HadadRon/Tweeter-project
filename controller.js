const renderer = RenderModule();
const tweeter = tweeterModules();

$(document).ready(function () {
  renderer.renderPost(tweeter.getPosts());

  $("#post").click(() => {
    const value = $("#input").val();
    if (value) {
      tweeter.addPost(value);
    }
    $("#input").val("");
    renderer.renderPost(tweeter.getPosts());
  });

  $("#container").on("click", ".add-comment", function () {
    const value = $(this).siblings("input").val();
    console.log($(this).closest(".post-box").attr("id"))
    const findPostId = $(this).closest(".post-box").attr("id")
    if (value) {
      tweeter.addComment(value, findPostId);
    }
    $(this).siblings("input").val("");
    renderer.renderPost(tweeter.getPosts());
  });
});
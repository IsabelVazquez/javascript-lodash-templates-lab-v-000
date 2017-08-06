function createPost() {
  var title = document.getElementById("postTitle").value;
  var author = document.getElementById("postAuthor").value;
  var content = document.getElementById("postContent").value;


  var templatePage = _.template((document.getElementById("page-template").innerHTML));
  var templatePost = _.template((document.getElementById("post-template").innerHTML));
  var templateComment = _.template((document.getElementById("comment-template").innerHTML));
}

function postComment() {
  var author = document.getElementById("commentName").value;
  var content = document.getElementById("commentContent").value;

  var templateComments = _.template((document.getElementById("comments-template").innerHTML));
}

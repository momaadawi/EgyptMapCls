$(document).ready(function() {
  $("#searchUser").on("keyup", function(e) {
    var username = e.target.value;

    $.ajax({
      url: "https://api.github.com/users/" + username,
      data: {
        client_id: "5b53eb3ff378107c3ed3",
        client_secret: "08e7092761f49e301413ca4a483caea6c97ebf75"
      }
    }).done(function(user) {
      $("#profile").html('<div class="panel panel-default"><div class="panel-heading"><h3 class="panel-title">'+user.login+'</h3></div><div class="panel-body"><div class="row"><div class=" col-md-3"><img src="'+user.avatar_url+'" style="width:100%" class="thumbnail avatar" alt="Profile Picture"><a href="'+user.html_url+'"class="btn btn-primary btn-block">Visit Profile</a> </div></div></div></div>');
    });
  });
});

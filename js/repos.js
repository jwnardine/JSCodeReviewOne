var githubKey = require('./../.env').githubKey;

exports.repos = function(username){
  $.get('https://api.github.com/users/' + username + '?access_token=' + githubKey).then(function(response) {
    console.log(response);
    $('#results').append("Your username is " + username + "<br>You're following: " + response.following);
    console.log(response);
  });
};

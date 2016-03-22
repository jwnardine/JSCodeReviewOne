var githubKey = require('./../.env').githubKey;

exports.getUser = function(username){
    $.get('https://api.github.com/users/' + username + '?access_token=' + githubKey).then(function(response) {
        console.log(response);
        if (response.location === null) {
            response.location = "";
        }
    $('#profile').append('<br><img class="img-rounded" src="' + response.avatar_url + '" width="200"><br>Username: ' + username + '<h4>' + response.location + '</h4><a href="' + response.followers_url + '"># of people who follow ' + username + ': ' + response.followers + '</a><br><a href="' + response.following_url + '"># of people who ' + username + ' follows: ' + response.following + '</a><p>Account Created: ' + response.created_at + '</p>Public repos: ' + response.public_repos + '<br><hr>');
  });
};

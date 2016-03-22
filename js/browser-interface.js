var githubKey = require('./../.env').githubKey;
var getUser = require('./../js/user.js').getUser;
var getRepos = require('./../js/repos.js').getRepos;

$(document).ready(function() {
  $('#profileButton').click(function() {
    event.preventDefault();
    var username = $('#usernameProfile').val();
    $('#usernameProfile').val("");
    console.log(username);
    getUser(username);
  });

  $('#reposButton').click(function() {
    event.preventDefault();
    var username = $('#usernameRepos').val();
    $('#usernameRepos').val("");
    console.log(username);
    getRepos(username);
  });
});

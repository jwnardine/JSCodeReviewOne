var githubKey = require('./../.env').githubKey;
var repos = require('./../js/repos.js').repos;

$(document).ready(function() {
  $('#githubButton').click(function() {
    var username = $('#username').val();
    $('#username').val("");
    console.log(username);
    repos(username);
  });
});

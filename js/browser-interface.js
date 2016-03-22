var githubKey = require('./../.env').githubKey;
var getUser = require('./../js/user.js').getUser;

$(document).ready(function() {
  $('#githubButton').click(function() {
    var username = $('#username').val();
    $('#username').val("");
    console.log(username);
    getUser(username);
  });
});

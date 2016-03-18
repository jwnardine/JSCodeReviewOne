var githubKey = require('./../.env').githubKey;

$(document).ready(function() {
  $('#githubButton').click(function() {
    var username = $('#username').val();
    $('#username').val("");
    $.get('https://api.github.com/users/' + username + '?access_token=' + githubKey).then(function(response) {
    console.log(response);
    $('.results').text("The humidity in " + city + " is " + response.main.humidity + "%");
    }).fail(function(error) {
      $('.showWeather').text(error.message);
    });
  });
});

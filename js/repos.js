var githubKey = require('./../.env').githubKey;

exports.getRepos = function(username){
    $.get('https://api.github.com/users/' + username + '/repos?access_token=' + githubKey).then(function(response){
        console.log(response);

        for(var i = 0; i < response.length; i++) {
            $('#repoList').append('<li>Name: ' + response[i].name + '</li>');
            $('#repoList').append('<li>Link: <a href="' + response[i].html_url + '">' + response[i].html_url + '</li><br>');
        }
    });
};

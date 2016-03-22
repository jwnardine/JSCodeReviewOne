var githubKey = require('./../.env').githubKey;

exports.getRepos = function(username){
    $.get('https://api.github.com/users/' + username + '/repos?access_token=' + githubKey).then(function(response){
      console.log(response);

      for(var i = 0; i < response.length; i++)
      {
        $('#repoList').append('<li> Repo Name: ' + response[i].full_name + '</li>');
         $('#repoList').append('<li> Description: ' + response[i].repos_url + '</li>');
      }
  });
  };

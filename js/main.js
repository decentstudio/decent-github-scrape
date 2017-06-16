$(document).ready(function(){
   $('#searchTeam').on('change', function(e){
      let teamname = e.target.value;


      //make request to github
      $.ajax({
          url:'https://api.github.com/orgs/' + teamname,
          data:{
              client_id:'47feb35ac747799df6c7',
              client_secret:'ac25d56b6b667ff7cea62569e7f004e56192ed98',
              sort: 'created: asc'
          }
      }).done(function(team){
          $.ajax({
            url:'https://api.github.com/orgs/' + teamname + '/repos',
            data:{
              client_id:'47feb35ac747799df6c7',
              client_secret:'ac25d56b6b667ff7cea62569e7f004e56192ed98'
          }
          }).done(function(repos){
            $.each(repos, function(index, repo){ 
                $('#repos').append(`
                    <div class="well">
                        <div class="row">
                            <div class="col-md-7">
                                <strong>${repo.name}</strong>: ${repo.description}
                            </div>
                            <div class="col-md-3">
                                <span class="label label-default">Language: ${repo.language}</span>
                                <span class="label label-success">Last Update: ${repo.updated_at}</span>
                            </div>
                            <div class="col-md-2">
                                <a target="_blank" class="btn btn-default" href="${repo.html_url}">Repo Page</a>
                            </div>
                        </div>
                    </div>
                `)
            });
          });
          $('#profile').html(`
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">${team.name}</h3>
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-3">
                           <img style="width:100%" class="thumbnail avatar" src="${team.avatar_url}">
                           <a target="_blank" class="btn btn-primary btn-block " href="${team.html_url}">View ${team.name} Profile</a>     
                        </div>
                        <div class="col-md-9">
                        <span class="label label-default">Public Repos: ${team.public_repos}</span>
                        <span class="label label-primary">Public Gists: ${team.public_gists}</span>
                        <span class="label label-success">Followers: ${team.followers}</span>
                        <span class="label label-info">Following: ${team.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${team.company}</li>
                            <li class="list-group-item">Website/blog: ${team.blog}</li>
                            <li class="list-group-item">Location: ${team.location}</li>
                            <li class="list-group-item">Created On: ${team.created_at}</li>

                        </ul>
                        </div>
                    </div>
                </div>
             </div>
             <h3 class"page-header">Latest Repos</h3>
                <div id="repos"></div>
                
          
          
          
          `);
      });
   });
});


$(document).ready(function(){
   $('#searchTeam').on('keyup', function(e){
      let teamname = e.target.value;


      //make request to github
      $.ajax({
          url:'https://api.github.com/orgs/' + teamname + '/repos',
          data:{
              client_id:'47feb35ac747799df6c7',
              client_secret:'ac25d56b6b667ff7cea62569e7f004e56192ed98'
          }
      }).done(function(team){
          if (team.length > 0) {
              for (var i = 0; i < team.length; i++){
                  var updateTime = new Date(team[i]['updated_at']).toLocaleString();
                  var x = document.getElementsByClassName('repos');
                  if (x.length < team.length) {
                      $('#profile ul').append('<li>', team[i]['name'], " ", updateTime, " ", team[i]['language'])
                 };
                };
          } else {
              alert('no public repositories');
          };
          console.log("hello");
      });
   });
});


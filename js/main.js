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
          for (var i = 0; i < team.length; i++){
              function parseISOString(s) {
                var b = s.split(/\D+/);
                return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5]));
                }
              var updateTime = parseISOString(team[i]['updated_at']);
            //  var updateTime = updateTim
            $("#profile ul").append('<li>', team[i]['name'], " ", updateTime, " ", team[i]['language'])
            
        };  console.log(team);
      });
   });
});

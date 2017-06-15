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
            $("#profile ul").append('<li>', team[i]['full_name'], team[i]['updated_at'], team[i]['language'])
           
            
            
            
        };  console.log(i);
      });
   });
});

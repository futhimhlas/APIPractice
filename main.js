const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://api-football-v1.p.rapidapi.com/v2/teams/league/2",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "4cf27efb20msh02bf2eba86b221fp1284cejsnb77ceea62379",
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	document.getElementById("data").innerHTML= response;
});

let apiData;
// let apiDataObject;

function getTeamData(teamDataCB){
    const data = null;
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            teamDataCB(JSON.parse(this.responseText));
        }
    });

    xhr.open("GET", "https://api-football-v1.p.rapidapi.com/v2/teams/league/2");
    xhr.setRequestHeader("x-rapidapi-key", "4cf27efb20msh02bf2eba86b221fp1284cejsnb77ceea62379");
    xhr.setRequestHeader("x-rapidapi-host", "api-football-v1.p.rapidapi.com");

    xhr.send(data);
}

getTeamData(function(data){
    let apiData = data;
    console.log(apiData)
});

// or make a function at the bottom of the xhr request to the api called printTeamDataToConsole(data) { console.log(data);} and then pass the function to getaTeamData(printTeamDataToConsole);



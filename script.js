$(document).ready(function() {
    var googleAPIkey = "18c881248ae94a0eb9c6e2320f2ab227";
    var rapidAPIkey = "3368eb3a0fmsh6fa4c6e2177a0d6p15bd2djsn0fd20a6e49da";

    createRapidApiData()

    //getting data from RapidApi
    function createRapidApiData(){
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=Australia",
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
                "x-rapidapi-key": rapidAPIkey
            }
        }
        $.ajax(settings).done(getCovidData).fail(errormsg);
        };


    // display the data inside the html
    function getCovidData(response){
        console.log(response);
        let statsAustralia = response.data.covid19Stats;
        $("#AusStates").change(function(){
            var stateText = $("#AusStates option:selected").text();
            console.log(stateText);
            let stateIndex = statsAustralia.findIndex( area => area.province === stateText)
            console.log(stateIndex);
            //console.log(data);   
            let state = $("<p>").text("State: " + JSON.stringify(statsAustralia[stateIndex].province));
            //console.log(state);
            let confirmed = $("<p>").text("Confirmed: " + JSON.stringify(statsAustralia[stateIndex].confirmed));
            let deaths = $("<p>").text("Deaths: " + JSON.stringify(statsAustralia[stateIndex].deaths));
            let recovered = $("<p>").text("Recovered: " + JSON.stringify(statsAustralia[stateIndex].recovered));
            let getTime  = $("<p>").text("Last updated: " + JSON.stringify(statsAustralia[stateIndex].lastUpdate));
            //console.log(getTime);
            $("#covidDisplay").append(state,confirmed,deaths,recovered,getTime);
        })

    };

    // getting the top news from google news for australia
    getTopNewsAU();

    function getTopNewsAU(){
        $.ajax({
            url: "https://newsapi.org/v2/top-headlines?country=au&apiKey="+googleAPIkey,
            method: "GET",
            method: "GET"})
            .then(populateNews)
            .fail(errormsg);
    }
    
    function populateNews(response){
        console.log(response);
    }
    
    
    //error message that is going to be shown. not yet finished need to modify
    function errormsg(){
        console.log("Unable to get any data");
    }
    

});
    
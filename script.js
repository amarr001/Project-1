$(document).ready(function() {
    var googleAPIkey = "18c881248ae94a0eb9c6e2320f2ab227";
    var rapidAPIkey = "3368eb3a0fmsh6fa4c6e2177a0d6p15bd2djsn0fd20a6e49da";

    createRapidApiData();
    getWorldConfirmedCases();
    getAusConfirmedCases();

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
        //console.log(response);
        let statsAustralia = response.data.covid19Stats;
        $("#AusStates").change(function(){
            var stateText = $("#AusStates option:selected").text();
            //console.log(stateText);
            let stateIndex = statsAustralia.findIndex( area => area.province === stateText)
            //console.log(stateIndex);
            //console.log(data);   
            let state = $("<p>").text("State: " + JSON.stringify(statsAustralia[stateIndex].province));
            //console.log(state);
            let confirmed = $("<p>").text("Confirmed: " + JSON.stringify(statsAustralia[stateIndex].confirmed));
            let deaths = $("<p>").text("Deaths: " + JSON.stringify(statsAustralia[stateIndex].deaths));
            let recovered = $("<p>").text("Recovered: " + JSON.stringify(statsAustralia[stateIndex].recovered));
            let getTime  = $("<p>").text("Last updated: " + JSON.stringify(statsAustralia[stateIndex].lastUpdate));
            //console.log(getTime);
            $("#covidDisplay").prepend(state,confirmed,deaths,recovered,getTime);
        })

    };


    // getting the top news from google news for australia
    getWorldNews()

    function getWorldNews(){
        $.ajax({
            url: "https://newsapi.org/v2/everything?q=corona%20or%20covid&language=en&sortedBy=popularity&apiKey="+googleAPIkey,
            method: "GET"})
            .then(populateNews)
            .fail(errormsg);
    }
    
    function populateNews(response){
        console.log(response);
        //  let title = $("</p>").text(response.)
        
    }
    
    
    //error message that is going to be shown.
    function errormsg(){
        console.log("Unable to get any data");
    }
    

    // Function to get total confirmed and recovered cases in Australia
    function getAusConfirmedCases() {
    $.ajax({
        url: "https://corona-api.com/countries/AU",
        method: "GET"}).done(getAuTotal).fail(errormsg)
    }

    function getAuTotal(response){
    let confirmedCases = response.data.latest_data.confirmed;
    let recoveredCases = response.data.latest_data.recovered;
    $("#numberAusCases").text("Australian confirmed cases: " +confirmedCases);
    $("#numberAusRecovCases").text("Australian recovered cases: " +recoveredCases);
    }

    // Function to get total confirmed and recovered cases world wide
    function getWorldConfirmedCases(){
    $.ajax({
        url: "https://corona-api.com/timeline",
        method: "GET"}).done(getWorldTotal).fail(errormsg)
    }

    function getWorldTotal(response){
    //console.log(response);
    let confirmedCases = response.data[0].confirmed;
    let recoveredCases = response.data[0].recovered;
    $("#numberWorldCases").text("World confirmed cases: " +confirmedCases);
    $("#numberWorldRecovCases").text("World recovered cases: " +recoveredCases);
    }

    $("#searchState").on("click",function(event){
        event.preventDefault();
        $("#covidDisplay").empty();
 
    }) 


});
    

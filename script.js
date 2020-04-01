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
            $("#covidDisplay").prepend(state,confirmed,deaths,recovered,getTime);
        })

    };

// Function to get the articles related to Corona Virus
function getAusArticles() {
    $.ajax({
        url: "http://newsapi.org/v2/top-headlines?country=au&category=health&apiKey=0e7b5f109619407cb1b122a24f82e1dc",
        method: "GET",
        success: function (incomingData) {
            // console.log(incomingData.articles);
            incomingData.articles.forEach((article) => {
                    console.log(article.title)
                    console.log(article.description)                
            });
        },
        error: function (uvData) {
            //console.log(uvData);
            console.log("There was an error");
        }
    })
}

// Function to get total confirmed and recovered cases in Australia

function getAusConfirmedCases() {
    $.ajax({
        url: "https://corona-api.com/countries/AU",
        method: "GET",
        success: function(incomingData){
            let confirmedCases = incomingData.data.latest_data.confirmed
            let recoveredCases = incomingData.data.latest_data.recovered

            console.log(confirmedCases);
            console.log(recoveredCases)
        },
        error: function(uvData) {
            console.log(error);
        }
    })
}

// Function to get total confirmed and recovered cases world wide
function getWorldConfirmedCases(){
    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://bing.com/covid/data/",
        method: "GET",
        success: function(response){
            console.log(response.totalConfirmed);
            console.log(response.totalRecovered);

            totalCases = response.areas[18].areas;
            totalCases.forEach((casePerSate) => console.log(`${casePerSate.displayName} ${casePerSate.totalConfirmed}`))
        },
        error: function(err){
            console.log("Cannot retrieve data");
        }  
    })
}

// getAusArticles();
getWorldConfirmedCases();
// getAusConfirmedCases();

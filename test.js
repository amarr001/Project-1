$(document).ready(function() {
const googleAPIkey = "18c881248ae94a0eb9c6e2320f2ab227";

function getTopNewsAU(){
    $.ajax({
        url: "https://newsapi.org/v2/top-headlines?country=au&apiKey="+googleAPIkey,
        method: "GET",
        method: "GET"})
        .then(populateInfo)
        .fail(errormsg);
}

//getTopNewsAU();

//createRapidApiData()

function createRapidApiData(){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
            "x-rapidapi-key": "74d0e0648emshac3b5765abb28c1p16082ajsn70e50a2069eb"
        }
    }
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}



// function getBingData(response){
//     let AuIndex = response.areas.findIndex( area => area.id === "australia");
//     console.log(AuIndex);
//     data = response.areas[AuIndex];
//     console.log(data);
//     let i = 0;
//     //for ( var i = 0; i < 8; i++){   
//         $("#stateName").text(JSON.stringify(data.areas[i].displayName));
//         console.log(data.areas[i].displayName);
//         $("#totalConfirmed").text(JSON.stringify(data.areas[i].totalConfirmed));
//         $("#totalDeaths").text(JSON.stringify(data.areas[i].totalDeaths));
//         $("#totalRecovered").text(JSON.stringify(data.areas[i].totalRecovered));
//         let getTime  = JSON.stringify(data.areas[i].lastUpdated);
//         //console.log(getTime);
//         $("#lastUpdated").text(getTime);
//      //}
    
// }


// function createBingAPICall(){
//     bingURL = "https://cors-anywhere.herokuapp.com/https://bing.com/covid/data";
//     $.ajax({
//         url: bingURL,
//         method: "GET"})
//         .then(getBingData)
//         .fail(errormsg);
// }

// createBingAPICall();

function populateInfo(response){
    console.log(response)
}

function errormsg(){
    console.log("Unable to get any data")
}


// function createRapidApiCall(){
//     var settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=Australia",
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
//             "x-rapidapi-key": "3368eb3a0fmsh6fa4c6e2177a0d6p15bd2djsn0fd20a6e49da"
//         }
//     }  
//     $.ajax(settings).done(getCovidData).fail(errormsg)
//     };

// function getCovidData(response){
//     let statsAustralia = response.data.covid19Stats;
//     statsAustralia.forEach(state => {
//         // console.log(state)
//         console.log(`state: ${state.province} -- confirmed: ${state.confirmed} -- recovered: ${state.recovered}`)}
//     };

// createRapidApiCall()

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": "74d0e0648emshac3b5765abb28c1p16082ajsn70e50a2069eb"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});
});

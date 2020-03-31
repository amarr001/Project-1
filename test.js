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

});

function getBingData(response){
    let AuIndex = response.areas.findIndex( area => area.id === "australia");
    console.log(AuIndex);
    data = response.areas[AuIndex];
    console.log(data);
    let i = 0;
    //for ( var i = 0; i < 8; i++){   
        $("#stateName").text(JSON.stringify(data.areas[i].displayName));
        console.log(data.areas[i].displayName);
        $("#totalConfirmed").text(JSON.stringify(data.areas[i].totalConfirmed));
        $("#totalDeaths").text(JSON.stringify(data.areas[i].totalDeaths));
        $("#totalRecovered").text(JSON.stringify(data.areas[i].totalRecovered));
        let getTime  = JSON.stringify(data.areas[i].lastUpdated);
        //console.log(getTime);
        $("#lastUpdated").text(getTime);
     //}
    
}


function createBingAPICall(){
    bingURL = "https://cors-anywhere.herokuapp.com/https://bing.com/covid/data/";
    $.ajax({
        url: bingURL,
        method: "GET"})
        .then(getBingData)
        .fail(errormsg);
}

createBingAPICall();

function populateInfo(response){
    console.log(response)
}

function errormsg(){
    console.log("Unable to get any data")
}

// idk yet optional ??
// function AUTotal() {
//     $.ajax({
//         url: "https://corona-api.com/countries/AU",
//         method: "GET"})
//         .then(populateInfo)
//         .fail(errormsg);
// }

// //AUTotal();
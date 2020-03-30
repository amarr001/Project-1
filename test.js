$(document).ready(function() {
var googleAPIkey = "18c881248ae94a0eb9c6e2320f2ab227";
var bingURL = "https://cors-anywhere.herokuapp.com/https://bing.com/covid/data/";


function displayCaseData(){
   
    $.ajax({
        url: bingURL,
        method: "GET"})
        .then(getBingData)
        .fail(errormsg);

    for ( var i = 0; i < response.areas.length; i++){   
        //$("#stateName").text(JSON.stringify(response.areas[i].displayName);
        //$("#totalConfirmed").text(JSON.stringify(response.areas[i].totalConfirmed);

     }
    
 
}

displayCaseData();


function getTopNewsAU(){
    $.ajax({
        url: "https://newsapi.org/v2/top-headlines?country=au&apiKey="+googleAPIkey,
        method: "GET",
        method: "GET"})
        .then(populateInfo)
        .fail(errormsg);
}

getTopNewsAU();

});

function getBingData(response){
    let AuIndex = response.areas.findIndex( area => area.id === "australia");
    console.log(AuIndex);
    data = response.areas[AuIndex];
    console.log(data);
    //totalCases = response.areas[AuIndex].areas;
    //totalCases.forEach((casePerState) => console.log(`${casePerState.displayName} ${casePerState.totalConfirmed}`))
}

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
$(document).ready(function() {
    var googleAPIkey = "18c881248ae94a0eb9c6e2320f2ab227";

    // getting the bing data for covid-19 cases
    getBingData();

    function getBingData(){
        bingURL = "https://cors-anywhere.herokuapp.com/https://bing.com/covid/data";
        $.ajax({
            url: bingURL,
            method: "GET"})
            .then(populateStateInfo)
            .fail(errormsg);
    }
    
    function populateStateInfo(response){
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
        console.log(response)
    }
    
    
    //error message that is going to be shown. not yet finished need to modify
    function errormsg(){
        console.log("Unable to get any data");
    }
        
});
    
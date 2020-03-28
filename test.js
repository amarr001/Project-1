function getdata(){
    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://bing.com/covid/data/",
        method: "GET",
        success: function(response){
            //console.log(response)
            console.log(response.areas[18]);
            totalCases = response.areas[18].areas;
            totalCases.forEach((casePerSate) => console.log(`${casePerSate.displayName} ${casePerSate.totalConfirmed}`))
        },
        error: function(err){
            console.log("Cannot retrieve data");
        }  
    })
}
getdata();


function AUTotal() {
    $.ajax({
        url: "https://corona-api.com/countries/AU",
        method: "GET",
        success: function(incomingData){

            console.log(incomingData);
        },
        error: function(err) {
            console.log("error");
        }
    })
}
AUTotal();
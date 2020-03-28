function getAusData() {
    $.ajax({
        url: "http://newsapi.org/v2/top-headlines?country=au&category=health&apiKey=0e7b5f109619407cb1b122a24f82e1dc",
        method: "GET",
        success: function (incomingData) {
            console.log(incomingData.articles);
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

function getAusConfirmedCases() {
    $.ajax({
        url: "https://corona-api.com/countries/AU",
        method: "GET",
        success: function(incomingData){
            let confirmedCases = incomingData.data.today.confirmed
            console.log(confirmedCases);
        },
        error: function(uvData) {
            console.log(error);
        }
    })
}
function getdata(){
    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://bing.com/covid/data/",
        method: "GET",
        success: function(response){
            console.log(response.totalConfirmed);
            console.log(response.totalRecovered);
        },
        error: function(err){
            console.log("Cannot retrieve data");
        }  
    })
}
getdata();
getAusData();
getAusConfirmedCases();

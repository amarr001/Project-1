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

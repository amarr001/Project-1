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
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=Australia",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
            "x-rapidapi-key": "3368eb3a0fmsh6fa4c6e2177a0d6p15bd2djsn0fd20a6e49da"
        }
    }
    
    $.ajax(settings).done(function (response) {
        let statsAustralia = response.data.covid19Stats

        statsAustralia.forEach(state => {
            // console.log(state)
            console.log(`state: ${state.province} -- confirmed: ${state.confirmed} -- recovered: ${state.recovered}`);
        })
    });
    
}


// getAusArticles();
getWorldConfirmedCases();
// getAusConfirmedCases();

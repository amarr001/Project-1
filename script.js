// Function to get the articles related to Corona Virus
PullStats();
function PullStats () {
    $.ajax({
        url: "https://corona-api.com/countries",
        method: "GET",
        success: function (incomingData) {
             console.log(incomingData);
             var currentNo = 0;
             console.log()
            for (var i = 0; i < 249; i++) {
                currentNo += incomingData.data[i].latest_data.confirmed;
            }

          console.log(currentNo);

        },
        error: function (uvData) {
            //console.log(uvData);
            console.log("There was an error");
        }
    })
}


getAusArticles();
function getAusArticles() {
    $.ajax({
        url: "http://newsapi.org/v2/top-headlines?country=au&category=health&apiKey=0e7b5f109619407cb1b122a24f82e1dc",
        method: "GET",
        success: function (incomingData) {
             console.log(incomingData.articles);


            for (let i = 0; i < 3; i++) {
                $("#Worldnewsarticles").append($("<div class='border border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'><h1>" + incomingData.articles[i].title + "</h1><h4>" + incomingData.articles[i].description + "</h4></div>"));
            };

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
        success: function (incomingData) {
            let confirmedCases = incomingData.data.latest_data.confirmed
            let recoveredCases = incomingData.data.latest_data.recovered

            console.log(confirmedCases);
            console.log(recoveredCases)
        },
        error: function (uvData) {
            console.log(error);
        }
    })
}

// Function to get total confirmed and recovered cases world wide
function getWorldConfirmedCases() {
    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://bing.com/covid/data/",
        method: "GET",
        success: function (response) {
            console.log(response.totalConfirmed);
            console.log(response.totalRecovered);

            totalCases = response.areas[18].areas;
            totalCases.forEach((casePerSate) => console.log(`${casePerSate.displayName} ${casePerSate.totalConfirmed}`))
        },
        error: function (err) {
            console.log("Cannot retrieve data");
        }
    })
}

// getAusArticles();
//getWorldConfirmedCases();
// getAusConfirmedCases();

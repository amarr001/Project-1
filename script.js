$(document).ready(function () {
    var googleAPIkey = "18c881248ae94a0eb9c6e2320f2ab227";

    getWorldConfirmedCases();
    getAusConfirmedCases();
    getWorldNews();

    function getWorldNews() {
        $.ajax({
                url: "https://newsapi.org/v2/everything?q=corona%20or%20covid&language=en&sortedBy=popularity&apiKey=" + googleAPIkey,
                method: "GET"
            })
            .then(populateNews)
            .fail(errormsg);
    }

    function populateNews(response) {

        for (let i = 0; i < 3; i++) {
            let title = $("<h3>").text(response.articles[i].title).attr("id", "title");
            let desc = $("<p>").text(response.articles[i].description).attr("id", "description");
            let articleLink = $("<a target='_blank'>").text("click here to read the full article").attr({
                "class": "linkstyle",
                "href": response.articles[i].url
            });

            $(`#worldNews${i}`).prepend(title, desc);
            $(`.worldNews${i}`).prepend(articleLink);

        }
    }

    //error message that is going to be shown.
    function errormsg() {
        console.log("Unable to get any data");
    }


    // Function to get total confirmed and recovered cases in Australia
    function getAusConfirmedCases() {
        $.ajax({
            url: "https://corona-api.com/countries/AU",
            method: "GET"
        }).done(getAuTotal).fail(errormsg)
    }

    function getAuTotal(response) {
        let confirmedCases = response.data.latest_data.confirmed;
        let recoveredCases = response.data.latest_data.recovered;
        $("#numberAusCases").text("Australian confirmed cases: " + confirmedCases);
        $("#numberAusRecovCases").text("Australian recovered cases: " + recoveredCases);
    }

    // Function to get total confirmed and recovered cases world wide
    function getWorldConfirmedCases() {
        $.ajax({
            url: "https://corona-api.com/timeline",
            method: "GET"
        }).done(getWorldTotal).fail(errormsg)
    }

    function getWorldTotal(response) {
        let confirmedCases = response.data[0].confirmed;
        let recoveredCases = response.data[0].recovered;
        $("#numberWorldCases").text("World confirmed cases: " + confirmedCases);
        $("#numberWorldRecovCases").text("World recovered cases: " + recoveredCases);
    }

});
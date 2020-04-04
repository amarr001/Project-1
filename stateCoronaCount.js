$(document).ready(function () {
    function getStateCoronaCount() {
        let rapidAPIkey = "3368eb3a0fmsh6fa4c6e2177a0d6p15bd2djsn0fd20a6e49da";

        createRapidApiData();

        function createRapidApiData() {
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=Australia",
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
                    "x-rapidapi-key": rapidAPIkey
                }
            }
            $.ajax(settings).done((response) => {

                let allStateArr = response.data.covid19Stats;
                let $stateCases = $("#stateCases");

                // Reading the input from drop down.

                $("#clearState").on("click", () => {
                    $stateCases.empty();
                })
                $("#searchState").on("click", () => {


                    $stateCases.empty();

                    let selectedState = document.getElementById("AusStates");
                    let selectedStateVal = selectedState.options[selectedState.selectedIndex].text;
                    let confirmed;
                    let recovered;
                    let deaths;

                    allStateArr.forEach(state => {
                        if(state.province === selectedStateVal){
                        confirmed = state.confirmed
                        recovered = state.recovered
                        deaths = state.deaths
                        }
                    });

                    // Getting confirmed cases

                    let $confirmed = document.createElement("P");
                    $confirmed.setAttribute("id", "confirmed");
                    $confirmed.innerText = `Total number of confirmed cases in ${selectedStateVal} is ${confirmed}`;

                    // Getting recovered cases
                    
                    let $recovered = document.createElement("P");
                    $recovered.setAttribute("id", "recovered");
                    $recovered.innerText = `${recovered} people have recovered.`;

                    let $deaths = document.createElement("P");
                    $deaths.setAttribute("id", "deaths");
                    $deaths.innerText = ` There have been ${deaths} deaths.`;

                    $("#stateCases").append($confirmed)
                    $("#stateCases").append($recovered)
                    $("#stateCases").append($deaths)
                    

                })

            }).fail((errormsg) => {
                console.log(errormsg)
            });
        };
    }
    // Running the function
    getStateCoronaCount();
})
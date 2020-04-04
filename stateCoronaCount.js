$(document).ready(function () {
    function getStateCoronaCount() {
        let rapidAPIkey = "3368eb3a0fmsh6fa4c6e2177a0d6p15bd2djsn0fd20a6e49da";
        createRapidApiData();
        function createRapidApiData(){
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
                let selectedState = document.getElementById("AusStates");
                let selectedStateVal = selectedState.options[selectedState.selectedIndex].value;

                console.log(selectedStateVal)

            }).fail((errormsg) => {
                console.log(errormsg)
            });
            };
    }
    // Running the function
    getStateCoronaCount();
})
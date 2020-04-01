
pullRecipes(); //Calls the function

function pullRecipes () {
    var settings = { //sets up the settings for the api call
        "async": true,
        "crossDomain": true,
        "url": "https://recipe-puppy.p.rapidapi.com/?q=healthy",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "recipe-puppy.p.rapidapi.com",
            "x-rapidapi-key": "825e9a3a96msh9b06faf825e739ep14c2a1jsn901d58c31d69"
        }
    }
    $.ajax(settings).done(function (response) {
        console.log(JSON.parse(response).results[0]);
        for (var i = 0; i < JSON.parse(response).results.length; i++) {//loops through the results and creates a card for each recipe found
            $("#recipeContainer").append($('<li><div class=" rounded overflow-hidden shadow-lg"><div class="px-6 py-4"><div class="font-bold text-xl mb-2">'+JSON.parse(response).results[i].title+'</div><img src="'+JSON.parse(response).results[i].thumbnail+'" alt="'+JSON.parse(response).results[i].title+'"><p class="text-gray-700 text-base">Ingredients: '+JSON.parse(response).results[i].ingredients+'</p></div><div class="px-6 py-4"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"><a target="blank" href="'+JSON.parse(response).results[i].href+'">Cook Me</a></span></div></div></li>'));
        }
    });

}


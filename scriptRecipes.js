
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
            $("#recipeContainer").append(
                
                
            $('<li>' +
            
            '<div class=" max-w-sm w-full lg:max-w-full flex">' +
            
            '<div class=" flex items-center lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">' +
            '<img class="w-40 h-60 rounded mr-4" src="'+JSON.parse(response).results[i].thumbnail+'" alt="'+JSON.parse(response).results[i].title+'"></img>' + 
            '</div>' +

            '<div class="w-4/5 border-b border-gray-400 p-4 justify-between leading-normal">' +
            
            
            '<div class="text-gray-900 font-bold text-xl mb-2">'+JSON.parse(response).results[i].title+'</div>' +
            '<p class="text-gray-700 text-base">Ingredients: '+JSON.parse(response).results[i].ingredients+'</p>' +

            '<div class=" py-4"><span class="inline-block rounded-full  py-1 text-sm font-semibold text-gray-700 mr-2">'+
            '<a target="blank" class="linkstyle" href="'+JSON.parse(response).results[i].href+'">Cook Me</a></span>'+
            
           '</div>' +


           '</div>' +
            
        
            
           '</li>'));
                
            
            
        }

    });

}


/* $('<li>' +
            
            '<div class="mb-3 border-solid border-l-8 border-yellow-500 rounded-t-lg rounded-b-lg">' +
            
            '<div class="px-6 ">' +
                
            '<div id="title" class="font-bold text-xl ">'+JSON.parse(response).results[i].title+'</div>' +
            '<img src="'+JSON.parse(response).results[i].thumbnail+'" alt="'+JSON.parse(response).results[i].title+'">' + 
            '<p id="description" class="text-gray-700 text-base">Ingredients: '+JSON.parse(response).results[i].ingredients+'</p></div>' + 
            
          '<div class="px-6 py-4"><span class="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"><a target="blank" class="linkstyle" href="'+JSON.parse(response).results[i].href+'">Cook Me</a></span></div>' + 
            
           '</div>' + 
            
           '</li>'));*/
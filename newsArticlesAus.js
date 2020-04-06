$(document).ready(function () {
    function getAusArticles() {
        $.ajax({
            // URL of the API
            url: "http://newsapi.org/v2/top-headlines?country=au&category=health&apiKey=0e7b5f109619407cb1b122a24f82e1dc",
            method: "GET",
            success: function (incomingData) {

                // Variables for reading data from the JSON
                let newsArticles = incomingData.articles;
                let articlelink;
                let newsDescription;
                let newsTitle;


                // For loop to read the data from the incoming articles

                for (let i = 1; i < 4; i++) {

                    newsDescription = newsArticles[i].description

                    newsTitle = $("<h3>" + newsArticles[i].title + "</h3>");
                    newsDescription = $("<p>" + newsDescription + "</p>");
                    newsTitle.attr("id", "title");
                    newsDescription.attr("id", "description");

                    $(`#ausNews${i}`).prepend(newsTitle, newsDescription)
                    
                    articlelink = $("<a>");
                    articlelink.attr({
                        "href" : newsArticles[i].url,
                        "class": "linkstyle",
                        "target": "_blank"
                    })
                    articlelink.text("Click here to read the full article")
                    $(`.ausNews${i}`).prepend(articlelink);
                }
            },
            error: function (uvData) {
                console.log(uvData);
            }
        })
    }

    // Running the function
    getAusArticles();
})
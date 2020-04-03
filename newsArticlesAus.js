$(document).ready(function () {
    function getAusArticles() {
        $.ajax({
            url: "http://newsapi.org/v2/top-headlines?country=au&category=health&apiKey=0e7b5f109619407cb1b122a24f82e1dc",
            method: "GET",
            success: function (incomingData) {
                // console.log(incomingData.articles);

                let newsArticles = incomingData.articles;
                let articlelink;
                let newsDescription;
                let newsTitle;
                

                

                // console.log(newsArticles[0].title)

                // First Article
                for (let i = 1; i < 4; i++) {
                    newsDescription = newsArticles[i].description

                    newsTitle = $("<h3>" + newsArticles[i].title + "</h3>");
                    newsDescription = $("<p>" + newsDescription + "</p>");
                    

                    $(`#ausNews${i}`).prepend(newsDescription)
                    $(`#ausNews${i}`).prepend(newsTitle)
                    newsTitle.attr("id", "title");
                    newsDescription.attr("id", "description");
                    
                    articlelink = $("<a>");
                    articlelink.attr("href", newsArticles[i].url)
                    articlelink.attr({"class": "linkstyle"})
                    articlelink.text("Click here to read the full article")
                    $(`.ausNews${i}`).prepend(articlelink);
                    
                    
                    
                }

            },
            error: function (uvData) {
                //console.log(uvData);
                console.log("There was an error");
            }

        })
    }

    getAusArticles();
})
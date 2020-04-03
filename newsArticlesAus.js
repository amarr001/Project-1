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
                    newsTitle = newsArticles[i].title
                    

                    $(`#ausNews${i}`).prepend("<p>" + newsDescription + "</p>")
                    $(`#ausNews${i}`).prepend("<h3>" + newsTitle + "</h3>")
                    $("h3").attr("id", "title");
                    $("p").attr("id", "description");
                    
                    articlelink = $(`.ausNews${i}`)
                    articlelink.attr("href", newsArticles[i].url)
                    articlelink.attr({"class": "linkstyle"})
                    articlelink.text("click here to read the full article")
                    
                    
                    
                    
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
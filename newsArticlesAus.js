$(document).ready(function () {
    function getAusArticles() {
        $.ajax({
            url: "http://newsapi.org/v2/top-headlines?country=au&category=health&apiKey=0e7b5f109619407cb1b122a24f82e1dc",
            method: "GET",
            success: function (incomingData) {
                // console.log(incomingData.articles);

                let newsArticles = incomingData.articles;
                let articlelink;

                // console.log(newsArticles[0].title)

                // First Article
                for (let i = 1; i < 4; i++) {
                    $(`#ausNews${i}`).prepend("<p>" + newsArticles[i].description + "</p>")
                    $(`#ausNews${i}`).prepend("<h3>" + newsArticles[i].title + "</h3>")
                    articlelink = $(`.ausNews${i}`)
                    articlelink.attr("OnClick", `location.href = '${newsArticles[i].url}'`)
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
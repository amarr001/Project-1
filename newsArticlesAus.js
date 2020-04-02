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
                    newsDescription = newsArticles[i].description;
                    newsTitle = newsArticles[i].title;
                    // Updating the div with the data from the API
                    // Updating the news description
                    $(`#ausNews${i}`).prepend("<p>" + newsDescription + "</p>")
                    // Updating the news title
                    $(`#ausNews${i}`).prepend("<h3>" + newsTitle + "</h3>")
                    // Select button the HTML
                    articlelink = $(`.ausNews${i}`)
                    // Adding the attr
                    articlelink.attr("OnClick", `location.href = '${newsArticles[i].url}'`)
                    // Updating the text
                    articlelink.text("click here to read the full article")
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
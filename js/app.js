const newOption = () => {
    $.when(
        $.get('http://localhost:3000/sorter.php')
    )
        .done(function (response) {
            createCard(response);
        });
};

$(function () {
    $("#name").keyup(function (event) {
        if ($(this).val().length >= 3) {
            if (event.keyCode === 13) {
                newOption();
            }
            return $("#Sortear").prop("disabled", false);
        }
        return $("#Sortear").prop("disabled", true);
    });

    $("#Sortear").click(() => {
        newOption();
    });

    createCard = (response) => {
        $("#WhatToDo").html($("#name").val() + ", " + response);
        updateTweet(response);
        // $("#ttButton").prop("href", "https://twitter.com/intent/tweet?button_hashtag=Quarenteners&text=" + response + "%0A#Quarenteners");
    };

    //Twitter Button Update
    function updateTweet(response) {
        // Remove the iframe
        $('.media-left iframe').remove();

        // Generate new markup
        $('<a>', {
            class: 'twitter-share-button',
            id: 'tweet_btn',
            href: 'http://twitter.com/intent/tweet',
            'data-text': response,
            'data-hashtags': 'Quarenteners',
            'data-url': ' ',
            'data-size': 'large'
        }).appendTo('.media-left');

        // Reload the widget
        twttr.widgets.load();
        $(".box").fadeIn("fast");
    }
});
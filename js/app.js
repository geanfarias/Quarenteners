const newOption = () => {
    $.when(
        $.get('http://localhost:3000/sorter.php')
    )
        .done(function (response) {
            createCard(response);
        });
};

$(function () {
    $("#name").keyup(function () {
        if ($(this).val().length >= 3) {
           return $("#Sortear").prop("disabled", false);
        }
        return $("#Sortear").prop("disabled", true);
    });

    $("#Sortear").click(() => {
        newOption();
    });

    createCard = (response) => {
        $("#WhatToDo").html($("#name").val() + ", " +response);
        $(".box").fadeIn("fast");
        $("#ttButton").prop("href", "https://twitter.com/intent/tweet?button_hashtag=Quarenteners&text=" + response + "%0A");
    };
});
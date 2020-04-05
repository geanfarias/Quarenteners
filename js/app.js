const newOption = (then) => {
    $.get('http://localhost:3000/sorter.php', then);
};

$(function() {
    $("#name").keyup(function(){
        if ($(this).val().length >= 3){
            $("#Sortear").prop("disabled", false);
        }
    });
});
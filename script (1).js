$(document).ready(function () {

   
    $("#add-btn").click(function () {
        var task = $("#todo-input").val().trim(); // get input and remove spaces

        if (task !== "") {
            $("#todo-list").append(
                "<li><input type='checkbox'> " + task + " <button class='delete'>X</button></li>"
            );
            $("#todo-input").val(""); // clear input
        } else {
            alert("Please enter a task!");
        }
    });

    
    $("#todo-input").keypress(function(e) {
        if (e.which == 13) {
            $("#add-btn").click();
        }
    });

   
    $(document).on("click", ".delete", function () {
        $(this).parent().remove();
    });

    
    $(document).on("change", "input[type='checkbox']", function () {
        $(this).parent().toggleClass("completed");
    });

});
$(".navbar-burger").click(function() {

    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");

});


function clearForm() {
    $("#name").val("");
    $("#email").val("");
    $("#message").val("");
}

$("#contact").click(function() {
    clearForm();
    $(".modal").toggleClass("is-active");
});

$(".modal-background").click(function() {
    $(".modal").toggleClass("is-active");
});

$(".delete").click(function() {
    $(".modal").toggleClass("is-active");
});

$("#close").click(function() {
    $(".modal").toggleClass("is-active");
});


$('#contact-form').submit(function(event){
    event.preventDefault();
    $.ajax({
        url:'https://hooks.zapier.com/hooks/catch/4264314/09qelu/',
        type:'post',
        data:$('#contact-form').serialize(),
        success:function(){
          $(".modal").removeClass("is-active");
        }
    });
});




//add porfolio statment

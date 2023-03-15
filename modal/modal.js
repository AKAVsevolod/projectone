$('.modal_overlay').on('click', function(e){
    if($(e.target).closest('.modal').length == 0) {
        $(this).fadeOut();
    }
})

$('.close').on('click', function() {
    $(this).parents('.modal_overlay').fadeOut();
})

$('.open_modal').on('click', function() {
    $('.modal_overlay').fadeIn();
})

$('.modal_register').on('click', function(e){
    if($(e.target).closest('.register').length == 0) {
        $(this).fadeOut();
    }
})

$('.close_register').on('click', function() {
    $(this).parents('.modal_register').fadeOut();
})

$('.open_register').on('click', function() {
    $('.modal_register').fadeIn();
})
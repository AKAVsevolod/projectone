$('.about_item > div').on('click', function() {
$(this).children('.about_icon').toggleClass('about_rotate_icon');    
    $(this).parent('.about_item').toggleClass('change_color');
    $(this).next('.about_text').slideToggle(300);
})

$('.slider_info > div').on('click', function() {
    $(this).parent('.slider_info').toggleClass('change_color_bottom');
    $(this).children('.slider_info_title').toggleClass('slider_change_color');
    $(this).next('.slider_info_text').slideToggle(300);
})




/**
 * Created by ThangTheMan on 4/28/16.
 */
$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 100) {
        $('.logo').fadeOut();
    } else {
        $('.logo').fadeIn();
    }
});

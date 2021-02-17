// $('.header i').on('click', function() {
//     alert('qwe');
// })
let $menu = $('.header i');
let $nav = $('.header nav');
let $bg = $('header');
let open = false;

$($menu).on('click', function() {
    if (!open) {
        $nav.css('display', 'flex');
        open = true;
        $bg.css('background', '#000');
    } else {
        $nav.css('display', 'none');
        open = false;
        $bg.css('background', 'none');
    }
});
$('nav a, nav input').on('click', function() {
    $nav.css('display', 'none');
    open = false;
    $bg.css('background', 'none');
});

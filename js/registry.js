/**
 * Created by Administrator on 2018/1/19.
 */
function registy() {
    $('input[name="registry"]').click(function () {
        $('.login').hide();
        $('#reg').css('display','block');

    });

    $('input[name="backLogin"]').click(function () {
        $('#reg').css('display','none');
        $('#login_form').show();
    });
}
registy();

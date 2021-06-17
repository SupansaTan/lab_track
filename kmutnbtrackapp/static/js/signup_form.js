/* wavify background animation */
$('#wave-dark-blue').wavify({
    height: 50,
    bones: 5,
    amplitude: 40,
    color: '#1261A0',
    speed: .25
});

$('#wave-blue').wavify({
    height: 50,
    bones: 3,
    amplitude: 50,
    color: '#459AE0',
    speed: .15
});

/* add scroll down button */
$(function () {
    if(document.body.scrollHeight > window.innerHeight) {
        $('main').after(`<a class="scroll-btn" href="#submit"><span></span></a>`)
    }

    $(window).scroll(function() {
        if($(this).scrollTop()+$(this).height() >= $('.signup-btn').offset().top+$('.signup-btn').height()) {
            $('.scroll-btn').hide();
        }
    });
})

/* set phone number */
$(document).ready(function () {
    if (sessionStorage.getItem("tel")) {
        const phoneNumber = sessionStorage.getItem('tel')
        let telInput = document.getElementById("telInput")
        telInput.value = phoneNumber
    }
    else{
        $(".title-under").after(
            `<div class="text-warning text-center">
                <p>กรุณาสแกน QR Code ใหม่อีกครั้ง</p>
            </div>`
        );
        $("#submit").prop("disabled", true);
    }
})
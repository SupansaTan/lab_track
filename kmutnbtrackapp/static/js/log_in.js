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

/* sign in button */
function Click_Sign_in_with_google() {
    location.href="{% url 'social:begin' 'google-oauth2' %}?next={{ lab_hash }}";
}

/* input phone number */
function validate(evt) {
    var theEvent = evt || window.event;

    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
    // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
    }
}
function SaveTel(){
    let phoneNumber = document.getElementById("tel").value
    sessionStorage.setItem('tel', phoneNumber)
}
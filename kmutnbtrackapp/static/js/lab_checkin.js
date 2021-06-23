
/* show,hide checkbox & time picker */
$('#TimeForm :checkbox').change(function() {
    const Mode = this.value;
    const time_selector = $('#time_value');

    if (this.checked) {
        
        /* when multiple checkboxes are checked */
        // unchecked & remove cancel icon other checkbox, hide time picker
        $('input:checkbox:checked').not(document.getElementById(Mode)).prop('checked', false)
        $('label').not($('label[for="' + Mode + '"]')).children().first().remove()
        time_selector.hide()

        /* show cancel icon & hide other checkbox */
        switch(Mode) {
            case '12:00':
            case '16:00':
            case '20:00':
                $('label[for="' + Mode + '"]').append('<i class="fas fa-times"></i>');
                time_selector.val(Mode)
                break

            case 'others':
                let now = new Date($.now())
                let hours_two_digit = ("0" + now.getHours()).slice(-2)
                let minutes_two_digit = ("0" + now.getMinutes()).slice(-2)

                time_selector.show() // display time picker
                time_selector.val(hours_two_digit + ':' + minutes_two_digit)
                $('label[for="others"]').append('<i class="fas fa-times"></i>'); 
                break
        }
    }
    else {
        Mode == "others" ? time_selector.hide() : true // hide time picker
        $('i.fa-times').remove() // remove cancel icon
        $('#status').hide()
    }
});

function checkTime() {
    let now = new Date($.now())
    let time_selector = $('#time_value').val().split(':')
    let select_time = new Date(now.getFullYear(), now.getMonth(), now.getDate(), time_selector[0], time_selector[1])

    if(select_time > now) {
        $('#status').text('กรุณาเลือกเวลาใช้งานที่ถูกต้อง').hide()
        return true
    }
    else {
        $('#status').text('กรุณาเลือกเวลาใช้งานที่ถูกต้อง').show()
        return false
    }
}
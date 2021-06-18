
/* show,hide checkbox & time picker */
$('#TimeForm :checkbox').change(function() {
    const Mode = this.value;
    const time_selector = document.getElementById('time_value');

    if (this.checked) {
        
        /* show cancel icon & hide other checkbox */
        switch(Mode) {
            case '12:00':
                $('label[for="12PM"]').append('<i class="fas fa-times"></i>');
                $('label[for="4PM"],label[for="8PM"],label[for="others"]').css('display','none')
                break

            case '16:00':
                $('label[for="4PM"]').append('<i class="fas fa-times"></i>');
                $('label[for="8PM"],label[for="12PM"],label[for="others"]').css('display','none')
                break

            case '20:00':
                $('label[for="8PM"]').append('<i class="fas fa-times"></i>');
                $('label[for="4PM"],label[for="12PM"],label[for="others"]').css('display','none')
                break

            case 'others':
                time_selector.style.display='block' // display time picker
                $('label[for="others"]').append('<i class="fas fa-times"></i>'); 
                $('label[for="12PM"],label[for="4PM"],label[for="8PM"]').css('display','none')
                break

            default:
                return true
        }
    }
    else {
        Mode == "others" ? time_selector.style.display='none':true // hide time picker
        
        $('i.fa-times').remove() // remove cancel icon
        $('label[for="12PM"],label[for="4PM"],label[for="8PM"],label[for="others"]').map(function(){
            $(this).css('display','')
        })
    }
});
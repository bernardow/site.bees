$(document).ready(function(){
    $('form').validate({
        rules: {
            name: {
                required : true
            },
            email: {
                required : true,
                email : true
            },
            message: {
                required : true
            }
        }
    })

    $('#tel').mask('(00) 00000-00000')
})
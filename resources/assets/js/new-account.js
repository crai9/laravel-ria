$('#signupForm').submit(function(event){

    event.preventDefault();

    console.log('works');

    var form = {
        email: $('#inputEmail-').val(),
        password: $('#inputPassword-').val(),
        password2: $('#inputPassword2-').val(),
        name: $('#inputName-').val()
    };

    console.log(form);

    if(form.password === form.password2){

        $.ajax({
                type: 'POST',
                data: form,
                url: '/api/user',
                dataType: 'json',
                encode: true
            })
            .done(function(data){

                toastr.success('Account created, you can now log in!');
                $('#tabLogin').tab('show');

            })
            .fail(function(data){
                console.log(data);
                toastr.error('Failed to make account, ' + data.responseJSON.details[0]);
            })

    } else {

        toastr.error('Passwords don\'t match');
        return;

    }
});
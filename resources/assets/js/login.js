var user;

$('#signinForm').submit(function(event){

    event.preventDefault();

    var form = {
        email: $('#inputEmail').val(),
        password: $('#inputPassword').val()
    };

    $.ajax({
        type: 'POST',
        data: form,
        url: '/api/auth',
        dataType: 'json',
        encode: true
    })
        .done(function(data){

            if(data.status == 'error'){
                toastr.error('Error, ' + data.message);
                return;
            }

            //Success
            toastr.success('Logged in!');
            $('#tabHome').tab('show');
            Cookies.set('authToken', data.token);

            $.ajax({
                type: 'GET',
                data: {
                    token: data.token
                },
                url: '/api/user'
            })
                .done(function(data){
                    user = data.user;
                    console.log(user);
                    $('#username').text(user.name);
                    $('#tabLogin').hide();
                    $('#userDropDown').show();
                    $('#tabBasket').show();
                    loggedIn = true;
                    updateBasket();
                })

        })
        .fail(function(data){

            var message = 'Failed to log in. ';
            toastr.error(message);

        })

});
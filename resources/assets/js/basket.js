var updateBasket = function(){

    $.ajax({
            type: 'GET',
            url: '/api/basket',
            beforeSend:  function(xhr) {
                xhr.setRequestHeader('Accept', 'application/json');
                xhr.setRequestHeader('Authorization', 'Bearer ' + Cookies.get('authToken'));
            }
        })
        .done(function(data){

            $('.total-items').html('<h5>Items in basket: ' + data.query.length + '</h5>');

            $('.basket-list').html('');

            if(data.products.length > 0) {

                for (var j = 0; j < data.products.length; j++) {

                    $('.basket-list').append("<li class='list-group-item basket-item' product-id='"
                        + data.products[j].id + "'><span class='badge'>£"
                        + data.products[j].price + "</span>"
                        + data.products[j].name + "</li>"
                    );

                }
            }

            var totalPrice = 0;

            for(var i = 0; i < data.products.length; i++){

                totalPrice = totalPrice + data.products[i].price;

            }

            $('.basket-total').html('<h4>Total price: £' + totalPrice.toFixed(2) + '</h4>');

        })

}


$('#cardPayment').get(0).submit = function() {
    var data = $(this).serializeArray();


    console.log(data);

    $.ajax({
            type: 'POST',
            url: '/api/pay',
            data: {
                stripeToken: data[0].value,
                stripeTokenType: data[1].value,
                stripeEmail: data[2].value,
            },
            beforeSend:  function(xhr) {
                console.log('here');
                xhr.setRequestHeader('Accept', 'application/json');
                xhr.setRequestHeader('Authorization', 'Bearer ' + Cookies.get('authToken'));
            }
        })
        .done(function(data){

            toastr.success('Payment sent');
            updateBasket();

        })

    // Prevent form submit.
    return false;
}

$(document.body).on('click', '.basket-item', function(){

    var product_id = $(this).attr('product-id');

    $.ajax({
            type: 'DELETE',
            url: '/api/basket/' + product_id,
            beforeSend:  function(xhr) {
                xhr.setRequestHeader('Accept', 'application/json');
                xhr.setRequestHeader('Authorization', 'Bearer ' + Cookies.get('authToken'));
            }
        })
        .done(function(data){

            $(this).remove();
            toastr.success('Item removed from basket');
            updateBasket();

        })

});

if(Cookies.get('authToken')){
    updateBasket();
}

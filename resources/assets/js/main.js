var loggedIn = false;
toastr.options.positionClass = 'toast-bottom-left';
var socket = io('http://192.168.10.10:3000');

socket.on('test-channel:Notification', function(data){
    toastr.success(data);
});

if(Cookies.get('authToken')){

    $.ajax({
            type: 'GET',
            data: {
                token: Cookies.get('authToken')
            },
            url: '/api/user'
        })
        .done(function(data){

            user = data.user;
            $('#username').text(user.name);
            $('#tabLogin').hide();
            $('#tabBasket').show();
            $('#userDropDown').show();
            $('.add-to-basket').show();
            loggedIn = true;
        })
        .fail(function(data){

            $('#userDropDown').hide();
            $('.add-to-basket').hide();

        })

} else {

    $('#userDropDown').hide();
    $('#tabLogin').show();
    $('.add-to-basket').hide();

}

var renderProductFeatured = function(product){

    this.html =  "<div class='col-md-4 col-sm-6 product'>";
    this.html +=    "<div class='thumbnail'>";
    this.html +=        "<img src='" + product.image + "' alt=''>";
    this.html +=        "<div class='caption'>";
    this.html +=            "<h3>" + product.name + "</h3>";
    this.html +=            "<p>";
    this.html +=            "<span class='badge text-right'>£" + product.price + "</span> ";
    this.html +=            "<span class='badge text-right'><i class='fa fa-clipboard' aria-hidden='true'></i> " + product.stock + "</span>";
    this.html +=            "</p>";
    this.html +=            "<p>" + product.desc.substring(0, 20) + '...' + "</p>";
    this.html +=            "<p>";
    this.html +=               "<a href='#' class='btn btn-primary add-to-basket' product-id='" + product.id + "'><i class='fa fa-cart-plus' aria-hidden='true'></i> Add</a>";
    this.html +=               "<a href='#' class='btn btn-default'>Details</a>";
    this.html +=            "</p>";
    this.html +=        "</div>";
    this.html +=    "</div>";
    this.html += "</div>";

    $('#featured-list').append(this.html);;
}

$.ajax({
        type: 'GET',
        data: {
            count: 3
        },
        url: '/api/random'
    })
    .done(function(data){


        for(var i = 0; i < data.length; i++){
            renderProductFeatured(data[i]);
        }

    })

$('.need-account').on('click', function(){
    $('#tabCreateUser').tab('show');
});

$('#logout').on('click', function(event){

    event.preventDefault();

    $.ajax({
            url: '/api/logout',
            type: 'GET',
            beforeSend:  function(xhr) {
                xhr.setRequestHeader('Accept', 'application/json');
                xhr.setRequestHeader('Authorization', 'Bearer ' + Cookies.get('authToken'));
            }
        })
        .done(function(data){
            console.log(data);
            Cookies.remove('authToken');
            toastr.success("You have been logged out");
            $('#userDropDown').hide();
            $('#tabLogin').show();
            $('#tabBasket').hide();
            $('#tabHome').tab('show');
            $('.basket-list').html('');
            $('.add-to-basket').hide();



            loggedIn = false;
        });
});
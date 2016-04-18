var response;

var renderProduct = function(product){

    this.html =  "<div class='col-md-3 col-sm-6 product'>";
    this.html +=    "<div class='thumbnail'>";
    this.html +=        "<img src='" + product.image + "' alt=''>";
    this.html +=        "<div class='caption'>";
    this.html +=            "<h3>" + product.name + "</h3>";
    this.html +=            "<p>";
    this.html +=            "<span class='badge text-right'>£" + product.price + "</span> ";
    this.html +=            "<span class='badge text-right'><i class='fa fa-clipboard' aria-hidden='true'></i> " + product.stock + "</span>";
    this.html +=            "</p>";
    this.html +=            "<p>" + product.desc.substring(0, 15) + '...' + "</p>";
    this.html +=            "<p>";
    this.html +=               "<a href='#' class='btn btn-primary add-to-basket' product-id='" + product.id + "'><i class='fa fa-cart-plus' aria-hidden='true'></i> Add</a>";
    this.html +=               "<a href='#' class='btn btn-default'>Details</a>";
    this.html +=            "</p>";
    this.html +=        "</div>";
    this.html +=    "</div>";
    this.html += "</div>";

    $('#products-list').append(this.html);;
}

var updatePageDetails = function(details){

    $('.pages').html("<h5>Page " +  details.current_page + " of " + details.last_page + "</h5>");
    $('.total').html("<h5>" +  details.total + " items</h5>");

    var prev = (details.current_page - 1 > 0) ? details.current_page - 1 : 1;
    this.html = "<li><a href='#' class='page-link' page-link='" + prev + "'>&laquo;</a></li>";

    for(var i = 1; i < details.last_page + 1; i++){
        this.html += "<li><a href='#' class='page-link' page-link='" + i + "'>" + i + "</a></li>";
    }

    var next = (details.current_page + 1 < details.last_page + 1) ? details.current_page + 1 : details.last_page;
    this.html += "<li><a href='#' class='page-link' page-link='" + next + "'>&raquo;</a></li>";

    $('.pagination').html(html);
}

var updateProducts = function(page){

    $.ajax({
            type: 'GET',
            data: {
                sort: $('.sort').val(),
                page: page || 1
            },
            url: '/api/products'
        })
        .done(function(data){

            response = data;
            var products = data.data;

            //clear products
            $('#product-container').html("<div id='products-list'></div>");

            updatePageDetails(data);

            for(var i = 0; i < products.length; i++){
                renderProduct(products[i]);
            }

        })
}

$('.sort').change(function(){

    updateProducts();

});

$(document.body).on('click', '.page-link', function(e){

    e.preventDefault();
    var page = $(this).attr('page-link');
    console.log(page);
    updateProducts(page);
});

$(document.body).on('click', '.add-to-basket', function(e){

    e.preventDefault();
    var product_id = $(this).attr('product-id');

    $.ajax({
            type: 'POST',
            data: {
                product_id: product_id
            },
            url: '/api/basket',
            beforeSend:  function(xhr) {
                xhr.setRequestHeader('Accept', 'application/json');
                xhr.setRequestHeader('Authorization', 'Bearer ' + Cookies.get('authToken'));
            }
        })
        .done(function(data){

            updateBasket();

            toastr.success('Added that item to your basket');

        })


});


updateProducts();
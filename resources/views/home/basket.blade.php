<h1>Basket</h1>
<div class="row">
    <div class="col-md-7 total-items"><h5>Items in basket: 1</h5></div>
    <div class="col-md-3"><h5>Click an item to remove it</h5></div>
    <div class="col-md-2">
        <form id="cardPayment" action="/api/pay" method="POST">
            <script
                    src="https://checkout.stripe.com/checkout.js" class="stripe-button"
                    data-key="pk_test_gIYLg3L4VVxiEYo7OPS0RT8q"
                    data-amount="3138"
                    data-name="Honours App"
                    data-description="Checkout"
                    data-image=""
                    data-locale="auto"
                    data-zip-code="false"
                    data-currency="gbp">
            </script>
        </form>
    </div>
</div>
<br>
<ul class="list-group basket-list">

</ul>
<div class="row">
    <div class="col-md-10"></div>
    <div class="col-md-2 basket-total"><h4>Total: £0</h4></div>
</div>
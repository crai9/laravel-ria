<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Honours app">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">

    <title>Honours App</title>
    <link href="{{ elixir('css/all.css') }}" rel="stylesheet">
</head>

<body>

<nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand">Honours App</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab" id="tabHome">Home</a></li>
                <li role="presentation"><a href="#products" aria-controls="products" role="tab" data-toggle="tab" id="tabProducts">Products</a></li>
                <li role="presentation"><a href="#basket" style="display: none;" aria-controls="basket" role="tab" data-toggle="tab" id="tabBasket">Basket</a></li>
                <li role="presentation"><a href="#login" style="display: none;" aria-controls="login" role="tab" data-toggle="tab" id="tabLogin">Login</a></li>
                <li id="userDropDown" style="display: none;" class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                        <span id="username">Name</span>
                        <i class="fa fa-caret-down" aria-hidden="true"></i>
                    </a>
                    <ul class="dropdown-menu">
                        <li><a id="logout" href="#logout">Logout</a></li>
                    </ul>
                </li>
                <li role="presentation"><a href="#createUser" aria-controls="createUser" role="tab" data-toggle="tab" id="tabCreateUser" class="invisible">Create User</a></li>
            </ul>
        </div>
    </div>
</nav>

<div class="container">
    <div>

        <!-- Tab panes -->
        <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="home">
                @include('home.home')
            </div>
            <div role="tabpanel" class="tab-pane" id="products">
                @include('home.products')
            </div>
            <div role="tabpanel" class="tab-pane" id="basket">
                @include('home.basket')
            </div>
            <div role="tabpanel" class="tab-pane" id="login">
                @include('home.login')
            </div>
            <div role="tabpanel" class="tab-pane" id="createUser">
                @include('home.new-account')
            </div>
        </div>

    </div>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.4.5/socket.io.min.js"></script>
<script src="{{ elixir('js/all.js') }}"></script>

</body>
</html>
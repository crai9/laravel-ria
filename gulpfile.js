var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {

    mix
        .less('sources.less', 'public/css', {
            paths:[
                (__dirname + '/bower_components/bootstrap/less'),
                (__dirname + '/vendor/font-awesome/less')
        ]

        })
        .sass('app.scss')
        .styles([
            '../../../public/css/sources.css',
            '../../../vendor/font-awesome/css/font-awesome.css',
            '../../../bower_components/toastr/toastr.css',
            '../../../public/css/app.css'
        ])
        .scripts([
                '../../../bower_components/bootstrap/dist/js/bootstrap.js',
                '../../../bower_components/toastr/toastr.js',
                '../../../bower_components/js-cookie/src/js.cookie.js',
                'main.js',
                'basket.js',
                'new-account.js',
                'login.js',
                'products.js'
            ],
            'public/js/all.js'
        )
        .copy(
            'vendor/font-awesome/fonts','public/fonts'
        )
        .copy(
            'vendor/font-awesome/fonts','public/build/fonts'
        )
        .version(['css/all.css', 'js/all.js']);

});

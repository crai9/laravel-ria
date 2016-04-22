<?php

Route::get('/', 'HomeController@index');
Route::post('/', 'BillingController@post');

Route::group(['prefix' => '/api'], function () {

    Route::post('/pay', 'BillingController@post');
    Route::resource('products', 'ProductController');
    Route::get('random', 'ProductController@random');
    Route::get('notify', 'HomeController@notification');
    Route::get('test', 'HomeController@test');

    Route::post('/auth', 'AuthController@auth');

    Route::post('/user', 'UserController@store');

    //Requires auth token to be sent with requests
    Route::group(['middleware' => ['auth.jwt']], function () {

        Route::get('/user', 'UserController@show');
        Route::get('/logout', 'AuthController@destroy');
        Route::resource('basket', 'BasketController', ['only' => ['index', 'store', 'destroy']]);

    });



});

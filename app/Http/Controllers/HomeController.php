<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Cache;
use Route;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redis;

class HomeController extends Controller
{

    public function index(){

        return view('index');

    }

    public function notification(Request $request){


        Redis::publish('test-channel', json_encode([
            'event' => 'Notification',
            'data' => $request->message
        ]));

        return 'sent';
    }

}

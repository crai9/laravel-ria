<?php

namespace App\Http\Controllers;

use App\Basket;
use App\User;
use Illuminate\Http\Request;

use App\Http\Requests;
use Auth;

class BillingController extends Controller
{

    function post(Request $request){

        $token = $request->stripeToken;

        $user = Auth::user();

        $basketItems = Basket::where('user_id', $user->id);
        $basketTotal = 0;

        foreach ($basketItems as $item) {
            $basketTotal += Product::find($item->product_id)->price;
        }
        
        $user->charge($basketTotal * 100, [
            'source' => $token,
            'currency' => 'gbp'
        ]);

        return ['status' => 'Payment was sent successfully', 'amount' => $basketTotal * 100];
    }
}

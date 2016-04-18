<?php

namespace App\Http\Controllers;

use App\Basket;
use App\Product;
use Illuminate\Http\Request;

use App\Http\Requests;
use Auth;
use DB;

class BasketController extends Controller
{

    public function index()
    {
        //Show user's basket
        $user = Auth::user();
        $products = [];

        $query = DB::select('select * from baskets where user_id = :id', ['id' => $user->id]);

        foreach ($query as $basket_item) {
            array_push($products, Product::find($basket_item->product_id));
        }

        return ['query' => $query, 'products' => $products];
    }


    public function store(Request $request)
    {
        //Add item to basket
        $user = Auth::user();

        $basket = new Basket;
        $basket->user_id = $user->id;
        $basket->product_id= $request->product_id;

        $basket->save();

    }


    public function destroy($id)
    {
        //remove item from basket
        $user = Auth::user();

        $basket = Basket::where(['user_id' => $user->id, 'product_id' => $id])->delete();

    }
}

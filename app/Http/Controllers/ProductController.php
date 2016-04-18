<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Product;

class ProductController extends Controller
{

    public function index(Request $request)
    {
        $sort = $request->sort;

        switch($sort){
            case 'Price - low to high':
                $products = Product::orderBy('price', 'ASC')->paginate(8);
                break;
            case 'Price - high to low':
                $products = Product::orderBy('price', 'DESC')->paginate(8);
                break;
            default:
                $products = Product::paginate(8);
                break;
        }

        return $products;

    }


    public function show($id)
    {
        return Product::find($id);
    }


    public function destroy($id)
    {
        Product::destroy($id);
    }


    public function random(Request $request){

        $products = [];

        $max = Product::count();

        $all = Product::all();

        for ($i = 1; $i <= $request->count; $i++) {
            array_push($products, $all[(rand(1, $max))]);
        }

        return $products;
    }
}

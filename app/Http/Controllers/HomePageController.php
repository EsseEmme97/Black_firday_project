<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Review;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
class HomePageController extends Controller
{
    public function index(){
        return Inertia::render('Welcome', [
            'products'=>Product::all()->makeHidden("stock")->map(function($product){
                $product->imgpath = asset('storage' . $product->imgpath);
                return $product;
            }),
            'reviews'=>Review::where("is_accepted",true)->get()->makeHidden("is_accepted")
        ]);
    }
}

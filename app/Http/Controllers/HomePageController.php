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
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'products'=>Product::all()->makeHidden("stock")->map(function($product){
                $product->imgpath = asset('storage' . $product->imgpath);
                return $product;
            }),
            'reviews'=>Review::all()->makeHidden("is_accepted")
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Review;
use Illuminate\Http\RedirectResponse as HttpRedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\RedirectResponse;

class AdminController extends Controller
{
    public function index()
    {
        return Inertia::render("Admin/AdminDashboard", ['products' => Product::all()->map(function ($product) {
            $product->imgpath = asset('storage/' . $product->imgpath);
            return $product;
        }),]);
    }

    public function store(Request $request):RedirectResponse
    {

        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'stock' => 'required|integer|min:1',
            'price' => 'required|numeric|min:0',
            'discountpercentage' => 'required|numeric|between:0,100',
            'imgpath' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        if ($request->hasFile('imgpath')) {
            $imagePath = $request->file('imgpath')->store('images', 'public');
            $validatedData['imgpath'] = $imagePath;
        }

        Product::create($validatedData);


        return to_route("admin");
    }

    public function update(string $id, Request $request):HttpRedirectResponse{
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'stock' => 'required|integer|min:1',
            'price' => 'required|numeric|min:0',
            'discountpercentage' => 'required|numeric|between:0,100',
            'imgpath' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        Product::updateOrCreate($validatedData);
        return to_route("admin");
    }

    public function deleteProduct(string $id){
        Product::destroy($id);
    }

    public function showReviews(){
        return Inertia::render("Admin/AdminReviews", [
            "reviews"=>Review::where("is_accepted",false)->get()
        ]);
    }

    public function updateReview(string $id, Request $request):RedirectResponse{
       $validatedRequest= $request->validate(["is_accepted"=>"required|boolean"]);
       $review= Review::find($id);
       $review->is_accepted= $validatedRequest["is_accepted"];
       $review->save();
       return to_route("adminReviews");
    }

    public function deleteReview (string $id):RedirectResponse{
        Review::destroy($id);
        return to_route("adminReviews");
    }
}

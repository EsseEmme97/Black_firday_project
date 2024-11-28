<?php

namespace App\Http\Controllers;

use App\Models\Product;
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
}

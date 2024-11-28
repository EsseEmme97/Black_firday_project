<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReviewsController extends Controller
{
    public function index()
    {
        return Inertia::render("Reviews");
    }

    public function store(Request $request) : RedirectResponse
    {
        $validated_request = $request->validate([
            "title" => "required|max:30",
            "content" => "required|max:30",
            "rating" => "required",
        ]);

        $validated_request["is_accepted"]=false;

        Review::create($validated_request);

        return to_route("success");
    }

    public function success(){
        return Inertia::render("Success");
    }
}

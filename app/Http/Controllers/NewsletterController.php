<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class NewsletterController extends Controller
{
   public function store(Request $request):RedirectResponse{
    $validatedRequest= $request->validate([
      "name"=>"required|max:55",
      "email"=>"required|email|unique:contacts,email",
      "gdpr"=>"required|accepted"
    ]);
    Contact::create($validatedRequest);
    return to_route("home");
   }
}

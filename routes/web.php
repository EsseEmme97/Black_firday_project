<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\HomePageController;
use App\Http\Controllers\NewsletterController;
use App\Http\Controllers\ReviewsController;
use Illuminate\Support\Facades\Route;


Route::get('/', [HomePageController::class, 'index'])->name("home");

Route::post("/newsletter", [NewsletterController::class, "store"]);

Route::get("/reviews", [ReviewsController::class, "index"])->name("reviews");
Route::post("/reviews", [ReviewsController::class, "store"]);
Route::get("/success", [ReviewsController::class, "success"])->name("success");


Route::get("/admin", [AdminController::class, "index"])->name("admin")->middleware("auth");
Route::post("/admin", [AdminController::class,"store"]);


require __DIR__ . '/auth.php';

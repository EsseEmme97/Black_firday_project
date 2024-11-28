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
Route::post("/admin", [AdminController::class,"store"])->middleware("auth");
Route::post("/admin/update/{id}", [AdminController::class,"update"])->middleware("auth");
Route::post("/admin/delete/{id}", [AdminController::class,"deleteProduct"])->middleware("auth");
Route::get("/admin/reviews",[AdminController::class,"showReviews"])->middleware("auth")->name("adminReviews");
Route::post("/admin/reviews/update/{id}",[AdminController::class,"updateReview"])->middleware("auth");
Route::post("/admin/reviews/delete/{id}", [AdminController::class,"deleteReview"])->middleware("auth");

require __DIR__ . '/auth.php';

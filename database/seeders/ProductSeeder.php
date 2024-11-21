<?php
namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table("products")->insert(
            [
                [
                    "title" => "Floreal Hoodie",
                    "price" => "69,99",
                    "description" => "Soft floral hoodie, perfect for adding a fresh spring vibe to your outfit.",
                    "stock" => 9,
                    "discountpercentage" => 35
                ],
                [
                    "title" => "Classical Hoodie",
                    "price" => "44,99",
                    "description" => "Classic black hoodie, perfect for a comfortable and versatile everyday style.",
                    "stock" => 4,
                    "discountpercentage" => 20
                ],
                [
                    "title" => "Camouflage Jacket",
                    "price" => "49,99",
                    "description" => "Bold camouflage jacket, ideal for a daring and adventurous look.",
                    "stock" => 20,
                    "discountpercentage" => 50
                ],
                [
                    "title" => "V@ans Jacket",
                    "price" => "49,99",
                    "description" => "Jacket inspired by the classic V@ans style, perfect for a casual and timeless look.",
                    "stock" => 15,
                    "discountpercentage" => 20
                ],
                [
                    "title" => "Yellow Hoodie",
                    "price" => "69,99",
                    "description" => "Vibrant yellow hoodie, perfect for those who love to stand out with bright and energetic colors.",
                    "stock" => 5,
                    "discountpercentage" => 35
                ]
            ]
        );
    }
}

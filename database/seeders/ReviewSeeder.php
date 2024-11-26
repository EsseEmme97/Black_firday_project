<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ReviewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table("reviews")->insert([
            [
                "title" => "An amazing store with amazing products",
                "content" => "What a beautiful store",
                "rating" => 4
            ],
            [
                "title" => "Exceptional quality and quick delivery",
                "content" => "I absolutely love this store",
                "rating" => 5
            ],
            [
                "title" => "Friendly staff and top-notch service",
                "content" => "Highly recommended to everyone",
                "rating" => 5
            ],
            [
                "title" => "Great deals and a wide product range",
                "content" => "Shopping here is a real pleasure",
                "rating" => 4
            ],
            [
                "title" => "Perfect for gifts and unique finds",
                "content" => "I found the ideal present here",
                "rating" => 5
            ],
            [
                "title" => "Reliable service and excellent items",
                "content" => "Everything exceeded my expectations",
                "rating" => 4
            ]
        ]);
    }
}

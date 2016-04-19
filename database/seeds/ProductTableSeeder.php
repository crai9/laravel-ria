<?php

use Illuminate\Database\Seeder;
use App\Product;
use Faker\Factory;
class ProductTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Factory::create();

        for ($i = 0; $i < 100; $i++)
        {
            $product = Product::create(array(
                'name' => $faker->safeColorName . ' ' . $faker->randomElement(['shirt', 'hat', 'shoes', 'jacket', 'bag', 'tie', 'glasses']),
                'desc' => $faker->sentence(7, true),
                'price' => $faker->randomFloat(2, 5, 50),
                'image' => $faker->imageUrl(800, 500, 'fashion', true),
                'stock' => $faker->numberBetween(1, 100),
                'category' => $faker->randomElement(['shirt', 'hat', 'shoes'])
            ));
        }
    }
}

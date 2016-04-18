<?php

use Illuminate\Database\Seeder;
use App\Product;
class ProductTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();

        for ($i = 0; $i < 100; $i++)
        {
            $user = Product::create(array(
                'name' => $faker->word,
                'desc' => $faker->sentence(7, true),
                'price' => $faker->randomFloat(2, 5, 50),
                'image' => $faker->imageUrl(800, 500, 'fashion', true),
                'stock' => $faker->numberBetween(1, 100),
                'category' => $faker->randomElement(['shirt', 'hat', 'shoes'])
            ));
        }
    }
}

<?php

namespace Database\Factories;

use App\Models\HandicapList;
use Illuminate\Database\Eloquent\Factories\Factory;

class HandicapListFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = HandicapList::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {

        return [
            'categoryId' => $this->faker->randomElement(['0','1']),
            'name' => $this->faker->unique()->randomElement(['York', 'American','Short','Western']),
        ];
    }
}

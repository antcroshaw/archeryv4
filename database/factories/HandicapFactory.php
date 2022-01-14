<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class HandicapFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->randomElement(['York', 'American','Short','Western']),
            'score' => $this->faker->randomNumber(2)
        ];
    }
}

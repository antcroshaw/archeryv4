<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         \App\Models\HandicapList::factory(4)->create();
        \App\Models\Category::factory(2)->create();
        \App\Models\Handicap::factory(5)->create();
    }
}

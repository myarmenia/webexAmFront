<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CreateUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::where('email', 'admin@mail.ru')->first();

        if(!$user){
            $user = User::updateOrCreate([
            'name' => 'admin',
            'status' => 1,
            'avatar' => '',
            'phone' => '+37494444444',
            'email' => 'admin@mail.ru',
            'password' => bcrypt('123456')
            ]);
        } 
    }
}

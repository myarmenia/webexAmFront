<?php
namespace App\Services\API;
use App\Models\User;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Arr;

class AuthService
{

    public function signup($data)
    {
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'phone' => $data['phone'],
            'password' => bcrypt($data['password']),
        ]);

        $user->assignRole('student');

        $credentials = Arr::only($data, ['email', 'password']);
  
        if (! $token = JWTAuth::attempt($credentials)) {
            return response()->json(['error' => 'Something went wrong'], 401);
        }

        return [
            'authUser' => $user,
            'token' => $token
        ];
    }
  
}

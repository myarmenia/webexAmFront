<?php
namespace App\Services\API;

use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Hash;

class UserService
{
    
    public function edit($data)
    {
        $user = JWTAuth::parseToken()->authenticate();
        $user->update($data);
        return $user;
    }

    public function editPassword($data)
    {
        $hashedPassword = auth('api')->user()->password;
        if(Hash::check($data['old_password'], $hashedPassword)){
            auth('api')->user()->update([
                'password' => Hash::make($data['password'])
            ]);
            return true;
        }
        return false;

    }
}

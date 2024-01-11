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

        if (!$token = JWTAuth::attempt($credentials)) {
            return responsgite()->json(['error' => 'Something went wrong'], 401);
        }

        return [
            'authUser' => $user->toArray(),
            'token' => $token
        ];
    }

    public function login($request)
    {
        try {
            $credentials = $request->only('email', 'password');

            if (!$token = JWTAuth::attempt($credentials)) {
                throw new \Exception('Unauthorized', 401);
            }

            auth()->user()->update([
                'ip' => request()->ip(),
                'login_at' => now(),
            ]);

            return [
                'authUser' => auth()->user()->toArray(),
                'token' => $token
            ];
        } catch (\Exception $e) {
            throw $e;
        }
    }

}

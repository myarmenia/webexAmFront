<?php
namespace App\Services\API;
use App\Models\User;
use Translation;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Arr;

class AuthService
{
    public $translation;
    public function __construct()
    {
        $lang = session('languages', 'am');
        $this->translation = new Translation($lang);
    }


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
            return response()->json(['error' => $this->translation->get('user-not-found')], 401);
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
                throw new \Exception($this->translation->get('user-not-found'), 401);
            }
            
            if (auth()->user()->status === 0) {
                throw new \Exception($this->translation->get('user-blocked'), 401);
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

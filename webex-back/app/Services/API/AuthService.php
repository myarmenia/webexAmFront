<?php
namespace App\Services\API;

use App\Models\API\VerifyUser;
use App\Models\User;
use Translation;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Arr;
use App\Mail\SendVerifyToken;
use Mail;
use Illuminate\Support\Str;

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
            'status' => 0,
            'password' => bcrypt($data['password']),
        ]);

        $user->assignRole('student');

        if ($user) {
            $token = sha1(Str::random(80));
            $email = $user->email;
            $verify = VerifyUser::create([
                'email' => $email,
                'verify_token' => $token
            ]);

            Mail::send(new SendVerifyToken($email, $token));

            return true;
        }

        return false;

        // $credentials = Arr::only($data, ['email', 'password']);

        // if (!$token = JWTAuth::attempt($credentials)) {
        //     return response()->json(['error' => $this->translation->get('user-not-found')], 401);
        // }

        // return [
        //     'authUser' => $user->toArray(),
        //     'token' => $token
        // ];
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

    public function checkVerifyToken($data)
    {
      $haveOrNot = VerifyUser::where('email', $data['email'])->where('token', $data['token'])->first();
  
      if($haveOrNot){
        $statusapproved = User::where('email', $data['email'])->update([
          'status' => 1
        ]);

        if($statusapproved){
            VerifyUser::where('email', $data['email'])->delete();
            return true;
        }

        return false;
      }
  
      return false;
    }

}

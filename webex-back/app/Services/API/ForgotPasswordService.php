<?php

namespace App\Services\API;

use App\Mail\SendForgotToken;
use App\Models\API\PasswordReset;
use App\Models\User;
use Illuminate\Support\Str;
use Mail;


class ForgotPasswordService
{
  public function sendResetLink($email)
  {
    $user = User::where('email', $email)->first();
    if ($user) {
        $token = sha1(Str::random(80));
        $email = $user->email;
        $newPasswordReset = PasswordReset::create([
            'email' => $email,
            'token'=> $token
        ]);

        Mail::send(new SendForgotToken($email, $token));

        return response()->json(['success' => true]);
    } else {
        return response()->json(['error' => 'User with this email address not found'], 400);
    }
    
  }

  public function checkForgotToken($data)
  {
    $haveOrNot = PasswordReset::where('email', $data['email'])->where('token', $data['token'])->first();

    if($haveOrNot){
        return true;
    }

    return false;
  }

  public function sendNewPassword($data)
  {
    $updated = User::where('email', $data['email'])->update([
        'password' => bcrypt($data['password']),
    ]);

    if($updated){
      PasswordReset::where('email', $data['email'])->delete();
      return true;
    }

    return false;
  }
}

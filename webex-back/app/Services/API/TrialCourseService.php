<?php

namespace App\Services\API;

use App\Mail\SendForgotToken;
use App\Models\API\PasswordReset;
use App\Models\User;
use Illuminate\Support\Str;
use Mail;


class TrialCourseService
{
  public function trialCourse($data)
  {
    Mail::send(new SendForgotToken($email, $token));
  }

}

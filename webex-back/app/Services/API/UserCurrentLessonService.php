<?php

namespace App\Services\API;

use App\Http\Resources\UserCurrentLessonResource;
use App\Models\UserCourseMenegment;
use Illuminate\Support\Facades\Auth;

class UserCurrentLessonService
{
  public  function getcurrentlesson(){
// dd(auth('api')->user());
    $user_id = auth('api')->user()->id;
    $current_lesson = UserCourseMenegment::where('user_id', 1)->with('course_languages','lessons','lessons.lesson_translations','lessons.tasks')->get()->last();


    return $current_lesson;


  }

}


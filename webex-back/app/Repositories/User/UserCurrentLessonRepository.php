<?php
namespace App\Repositories\User;

use App\Http\Resources\UserCurrentLessonResource;
use App\Interfaces\User\UserCurrentLessonInterface;
use App\Models\UserCourseMenegment;

// use App\Models\User;


class UserCurrentLessonRepository implements UserCurrentLessonInterface
{

  public function getcurrentlesson($request)
  {

    $user_id = auth('api')->user()->id;

    $user_current_lesson='';

    if($request['language_id'] == 0 && $request['lesson_id'] == 0){

      $user_current_lesson = UserCourseMenegment::where('user_id',$user_id)->with('course_languages','lessons','lessons.lesson_translations','lessons.tasks')->get()->last();

    }else{

      $user_current_lesson = UserCourseMenegment::where([
                                                ['user_id','=',$user_id],
                                                ['course_language_id','=',$request['language_id']],
                                                ['lesson_id','=',$request['lesson_id']],
      ])->with('course_languages','lessons','lessons.lesson_translations','lessons.tasks')->first();

    }

    $current_lesson = new UserCurrentLessonResource($user_current_lesson);
    return $current_lesson;

  }
}

<?php
namespace App\Repositories\User;

use App\Http\Resources\GetOpendLessonResource;
use App\Http\Resources\UserCurrentLessonResource;
use App\Interfaces\User\UserCurrentLessonInterface;
use App\Models\CourseLanguage;
use App\Models\Lesson;
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
      $lesson = Lesson::find($request['lesson_id']);

      $user_current_lesson = UserCourseMenegment::where([
                                                ['user_id','=',$user_id],
                                                ['course_language_id','=',$request['language_id']]

      ])->with('course_languages','lessons','lessons.lesson_translations','lessons.tasks')->first();

      if($user_current_lesson!=null){
// dd($lesson->number,$user_current_lesson->lesson_number);
        if($lesson->number <= $user_current_lesson->lesson_number){

          $user_current_lesson = UserCourseMenegment::where('user_id',$user_id)->with('course_languages','lessons','lessons.lesson_translations','lessons.tasks')->get()->last();
          $all_lesson=Lesson::where('course_language_id',$request['language_id'])->get();

          $current_lesson = new GetOpendLessonResource($lesson);

          return $current_lesson;

        }
        else{

          $user_current_lesson = $user_current_lesson;
        }

      }

    }

    $current_lesson = new UserCurrentLessonResource($user_current_lesson);
    return $current_lesson;

  }
}

<?php

namespace App\Services\Users;

use App\Models\UserCourseMenegment;

class OpenNextLessonService
{
  public static function open_next_lesson($user, $course, $course_menegment)
  {

    if ($user && $course) {

        try {


            $last_lesson_number = max(array_column($course->lessons->toArray(), 'number'));
            $next_lesson_number = $course_menegment->lesson_number + 1;
            $next_lesson = $course->lessons->where('number', $next_lesson_number)->first();

            if($next_lesson_number <=  $last_lesson_number){
                $course_menegment->update([
                    'lesson_id' => $next_lesson->id,
                    'lesson_number' => $next_lesson_number
                ]);
            }
           

            return $next_lesson_number;

        } catch (\Exception $exception) {
            
            $errorInfo = $exception->getMessage();

            return  $errorInfo;
        }


    }
  }
}

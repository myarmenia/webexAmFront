<?php

namespace App\Services\Users;

use App\Models\UserCourseMenegment;

class AddCourseForStudentService
{
  public static function add_course($user, $hasCourse, $course)
  {

    if ($user && $hasCourse == null) {
      try {
          $create =  UserCourseMenegment::create([
            'user_id' => $user->id,
            'course_language_id' => $course->id,
            'lesson_id' => $course->lessons->first()->id,
            'lesson_number' => $course->lessons->first()->number
          ]);

          return 'Урок открит!';

      } catch (\Exception $exception) {
          
          $errorInfo = $exception->getMessage();

          return  $errorInfo;
      }


    }
  }
}

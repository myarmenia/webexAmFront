<?php

namespace App\Services\Users;

class AddCourseForStudentService
{
  public static function add_course($user, $course)
  {
    if ($user) {
      return $user->user_course_menegments->create([
        'course_language_id' => $course->id,
        'lesson_id' => $course->lessons->first()->id,
        'lesson_number' => $course->lessons->first()->number
      ]);
    }
  }
}

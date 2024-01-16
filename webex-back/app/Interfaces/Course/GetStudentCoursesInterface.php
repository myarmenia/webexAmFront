<?php

namespace App\Interfaces\Course;

interface GetStudentCoursesInterface
{
  public function GetStudentCoursess(int $id, int $course_language_id);
}

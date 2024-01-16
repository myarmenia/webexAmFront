<?php

namespace App\Interfaces\Course;

interface GetStudentCoursesInterface
{
  public function getUser(int $id);
  public function GetStudentCoursess(int $id, int $course_language_id);
}

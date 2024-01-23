<?php

namespace App\Interfaces\Course;

interface GetStudentCourseInterface
{
  public function getUser(int $id);
  public function GetStudentCourse(int $id, int $course_language_id);
  public function getCourseLanguage(int $id);
}

<?php
namespace App\Traits\Users;
use App\Models\UserCourseMenegment;

trait UserCourseMenegmentTrait
{
  public function getUserCourseMenegment(int $id, int $course_language_id)
  {
    return UserCourseMenegment::where('user_id', $id)->where('course_language_id', $course_language_id)->first();
  }
}

<?php
namespace App\Traits\Users;
use App\Models\UserCourseMenegment;

trait UserCourseLanguagesTrait
{
  public function getUserCourseLanguages(int $id)
  {
    return UserCourseMenegment::where('user_id', $id)->pluck('course_language_id')->toArray();
  }
}

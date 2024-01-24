<?php
namespace App\Traits\Student;
use App\Models\UserCourseMenegment;

trait CourseMenegmentTrait
{
  public function getAllCourseMenegment(int $id)
  {
    return UserCourseMenegment::where('user_id', $id)->get();
  }
}

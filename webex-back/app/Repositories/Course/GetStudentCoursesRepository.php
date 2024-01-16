<?php
namespace App\Repositories\Course;

use App\Interfaces\Course\GetStudentCoursesInterface;
use App\Models\CourseLanguage;
use App\Models\UserCourseMenegment;

class GetStudentCoursesRepository implements GetStudentCoursesInterface
{
  public function GetStudentCoursess(int $id){

    return UserCourseMenegment::where('user_id', $id)->get();
  }
}

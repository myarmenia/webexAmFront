<?php
namespace App\Repositories\Course;

use App\Interfaces\Course\GetStudentCoursesInterface;
use App\Models\CourseLanguage;
use App\Models\UserCourseMenegment;

class GetStudentCoursesRepository implements GetStudentCoursesInterface
{
  public function getUser(int $id)
  {
    return User::find($id);
  }
  
  public function GetStudentCoursess(int $id, int $course_language_id){

    return UserCourseMenegment::where(['user_id' => $id, 'course_language_id' => $course_language_id])->first();
  }
}

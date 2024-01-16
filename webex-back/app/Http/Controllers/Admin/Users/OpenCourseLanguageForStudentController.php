<?php

namespace App\Http\Controllers\Admin\Users;

use App\Http\Controllers\Controller;
use App\Interfaces\Course\GetStudentCoursesInterface;
use App\Interfaces\User\UserInterface;
use App\Services\Users\AddCourseForStudentService;
use Illuminate\Http\Request;


class OpenCourseLanguageForStudentController extends Controller
{
  private GetStudentCoursesInterface $getStudentCoursesRepository;

  function __construct(GetStudentCoursesInterface $getStudentCoursesRepository)
  {
    return $this->getStudentCoursesRepository = $getStudentCoursesRepository;

  }

  public function index(Request $request, $user_id)
  {

      $student = $this->getStudentCoursesRepository->getUser($user_id);
      $course = $this->getStudentCoursesRepository->GetStudentCoursess($user_id, $request->course_language_id);
      dd($course);
      AddCourseForStudentService::add_course($student, $course, $request->language_id);

  }
}

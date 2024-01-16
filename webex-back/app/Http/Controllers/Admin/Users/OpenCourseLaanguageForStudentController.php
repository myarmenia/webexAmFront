<?php

namespace App\Http\Controllers\Admin\Users;

use App\Http\Controllers\Controller;
use App\Interfaces\Course\GetStudentCoursesInterface;
use App\Interfaces\User\UserInterface;
use App\Services\Users\AddCourseForStudentService;
use Illuminate\Http\Request;


class OpenCourseLaanguageForStudentController extends Controller
{
  private UserInterface $userRepository;
  private GetStudentCoursesInterface $GetStudentCoursesRepository;


  function __construct(UserInterface $userRepository, GetStudentCoursesInterface $GetStudentCoursesRepository)
  {
    return $this->userRepository = $userRepository;
    return $this->GetStudentCoursesRepository = $GetStudentCoursesRepository;

  }

  public function index(Request $request, $user_id)
  {

    $student = $this->userRepository->getUser($user_id);
    $course = $this->GetStudentCoursesRepository->GetStudentCoursess($request->language_id);
    AddCourseForStudentService::add_course($student, $course);

  }
}

<?php

namespace App\Http\Controllers\Admin\Users;

use App\Http\Controllers\Controller;
use App\Interfaces\Course\LanguageInterface;
use App\Interfaces\User\UserCourseLanguagesInterface;
use App\Interfaces\User\UserInterface;
use App\Interfaces\User\StudentInfoInterface;
use Illuminate\Http\Request;

class StudentInfoController extends Controller
{
  private StudentInfoInterface $studentInmfoRepository;
  // private ?LanguageInterface $languageRepository = null;
  // private ?UserCourseLanguagesInterface $courseLangagesRepository = null;
  // function __construct(UserInterface $userRepository, LanguageInterface $languageRepository, UserCourseLanguagesInterface $courseLangagesRepository)

  function __construct(StudentInfoInterface $studentInmfoRepository)

  {
    return $this->studentInmfoRepository = $studentInmfoRepository;

    // return $this->userRepository = $userRepository;
    // return $this->languageRepository = $languageRepository;
    // return $this->courseLangagesRepository = $courseLangagesRepository;
  }


  public function index(int $id)
  {

    $student = $this->studentInmfoRepository->getUser($id);
    $course_languages = $this->studentInmfoRepository ? $this->studentInmfoRepository->getAll() : null;
    $user_course_langages = $this->studentInmfoRepository ? $this->studentInmfoRepository->getUserCourseLanguages($id) : null;

    return view('content.users.lessons', compact('student', 'course_languages', 'user_course_langages'));
  }
}

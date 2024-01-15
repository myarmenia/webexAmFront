<?php

namespace App\Http\Controllers\Admin\Users;

use App\Http\Controllers\Controller;
use App\Interfaces\Course\LanguageInterface;
use App\Interfaces\User\UserCourseLanguagesInterface;
use App\Interfaces\User\UserInterface;
use Illuminate\Http\Request;

class StudentInfoController extends Controller
{
  private UserInterface $userRepository;
  private LanguageInterface $languageRepository;
  private UserCourseLanguagesInterface $courseLangagesRepository;

  function __construct(UserInterface $userRepository, LanguageInterface $languageRepository, UserCourseLanguagesInterface $courseLangagesRepository)
  {
    return $this->userRepository = $userRepository;
    return $this->languageRepository = $languageRepository;
    return $this->courseLangagesRepository = $courseLangagesRepository;
  }


  public function index(int $id)
  {

    $student = $this->userRepository->getUser($id);
    $course_languages = $this->languageRepository->getAll();
    $user_course_langages = $this->courseLangagesRepository->getUserCourseLanguages($id);

    return view('content.users.lessons', compact('student, course_languages, user_course_langages'));
  }
}

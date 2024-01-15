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
  private ?LanguageInterface $languageRepository = null;
  private ?UserCourseLanguagesInterface $courseLangagesRepository = null;

  function __construct(UserInterface $userRepository, LanguageInterface $languageRepository, UserCourseLanguagesInterface $courseLangagesRepository)

  {
    return $this->userRepository = $userRepository;
    return $this->languageRepository = $languageRepository;
    return $this->courseLangagesRepository = $courseLangagesRepository;
  }


  public function index(int $id)
  {

    $student = $this->userRepository->getUser($id);
    $course_languages = $this->languageRepository ? $this->languageRepository->getAll() : null;
    $user_course_langages = $this->courseLangagesRepository ? $this->courseLangagesRepository->getUserCourseLanguages($id) : null;

    return view('content.users.lessons', compact('student', 'course_languages', 'user_course_langages'));
  }
}

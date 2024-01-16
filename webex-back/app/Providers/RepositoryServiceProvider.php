<?php

namespace App\Providers;

use App\Interfaces\Course\GetStudentCoursesInterface;
use App\Interfaces\Course\FindCourseLanguageInterface;
use App\Interfaces\Course\LanguageInterface;
use App\Interfaces\User\UserCourseLanguagesInterface;
use App\Interfaces\User\UserCurrentLessonInterface;
use App\Interfaces\User\UserInterface;
use App\Interfaces\User\StudentInfoInterface;
use App\Repositories\Course\FindCourseLanguageRepository;
use App\Repositories\Course\GetStudentCoursesRepository;
use App\Repositories\Course\LanguageRepository;
use App\Repositories\User\UserCourseLanguagesRepasotory;
use App\Repositories\User\UserCurrentLessonRepository;
use App\Repositories\User\UserRepository;
use App\Repositories\User\StudentInfoRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
  /**
   * Register services.
   */
  public function register(): void
  {
    
    $this->app->bind(UserInterface::class, UserRepository::class);
    $this->app->bind(LanguageInterface::class, LanguageRepository::class);
    $this->app->bind(UserCourseLanguagesInterface::class, UserCourseLanguagesRepasotory::class);
    $this->app->bind(UserCurrentLessonInterface::class,UserCurrentLessonRepository::class);
    $this->app->bind(FindCourseLanguageInterface::class, FindCourseLanguageRepository::class);
    $this->app->bind(StudentInfoInterface::class, StudentInfoRepository::class);
    $this->app->bind(GetStudentCoursesInterface::class, GetStudentCoursesRepository::class);



  }

  /**
   * Bootstrap services.
   */
  public function boot(): void
  {
    //
  }
}

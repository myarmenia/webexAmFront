<?php

namespace App\Providers;

use App\Interfaces\Course\CourseLanguageInterface;
use App\Interfaces\Course\GetStudentCourseInterface;
use App\Interfaces\Course\LanguagesInterface;
use App\Interfaces\User\UserCourseLanguagesInterface;
use App\Interfaces\User\UserCurrentLessonInterface;
use App\Interfaces\User\UserInterface;
use App\Interfaces\User\StudentInfoInterface;
use App\Repositories\Course\CourseLanguageRepository;
use App\Repositories\Course\GetStudentCourseRepository;
use App\Repositories\User\UserCurrentLessonRepository;
use App\Repositories\User\UserRepository;
use App\Repositories\User\StudentInfoRepository;
use App\Repositories\User\UserCourseLanguagesRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
  /**
   * Register services.
   */
  public function register(): void
  {

    $this->app->bind(UserInterface::class, UserRepository::class);
    $this->app->bind(LanguagesInterface::class, UserCourseLanguagesRepository::class);
    $this->app->bind(UserCourseLanguagesInterface::class, UserCourseLanguagesRepository::class);
    $this->app->bind(UserCurrentLessonInterface::class, UserCurrentLessonRepository::class);
    $this->app->bind(StudentInfoInterface::class, StudentInfoRepository::class);
    $this->app->bind(GetStudentCourseInterface::class, GetStudentCourseRepository::class);
    $this->app->bind(CourseLanguageInterface::class, CourseLanguageRepository::class);

  }

  /**
   * Bootstrap services.
   */
  public function boot(): void
  {
    //
  }
}

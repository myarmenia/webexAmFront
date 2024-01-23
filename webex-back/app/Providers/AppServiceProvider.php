<?php

namespace App\Providers;

use App\Interfaces\Project\ProjectRepositoryInterface;
use App\Repositories\User\ProjectRepository;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
  /**
   * Register any application services.
   */
  public function register(): void
  {
    $this->app->bind(ProjectRepositoryInterface::class, ProjectRepository::class);
  }

  /**
   * Bootstrap any application services.
   */
  public function boot(): void
  {
    Paginator::useBootstrapFive();
  }
}

<?php

namespace App\Http\Controllers\API\Lessons;

use App\Http\Controllers\API\BaseController;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserCurrentLessonResource;
use App\Interfaces\User\UserCurrentLessonInterface;
use App\Models\UserCourseMenegment;
use App\Repositories\User\UserCurrentLessonRepository;
use App\Services\API\UserCurrentLessonService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserCurrentLessonController extends BaseController
{

  // protected $userCurrentLessonService;
  // public function __construct(UserCurrentLessonService $userCurrentLessonService){
  //     $this->userCurrentLessonService = $userCurrentLessonService;
  //     // dd($this->userCurrentLessonService);

  // }
  //   public function index(Request $request){

        // $user_current_lesson = $this->userCurrentLessonService->getcurrentlesson();

  //       $current_lesson = new UserCurrentLessonResource($user_current_lesson);
  //       return $this->sendResponse($current_lesson, 'success');
  //   }
  private UserCurrentLessonInterface $userCurrentLessonRepository;

  public function __construct(UserCurrentLessonInterface $userCurrentLessonRepository){

    $this->userCurrentLessonRepository = $userCurrentLessonRepository;

  }
  public function index(Request $request){

    info(auth('api')->user());
    $current_lesson = $this->userCurrentLessonRepository->getcurrentlesson($request->all());
    return $this->sendResponse($current_lesson, 'success');
  }


}

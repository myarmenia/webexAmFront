<?php

namespace App\Http\Controllers\API\Lessons;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserCurrentLessonResource;
use App\Models\UserCourseMenegment;
use App\Services\API\UserCurrentLessonService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserCurrentLessonController extends Controller
{

  protected $userCurrentLessonService;
  public function __construct(UserCurrentLessonService $userCurrentLessonService){
      $this->userCurrentLessonService = $userCurrentLessonService;
      // dd($this->userCurrentLessonService);

  }
    public function index(Request $request){
// dd(444);
// dd($request->lang);
      // dd(Auth::user());
        $user_current_lesson = $this->userCurrentLessonService->getcurrentlesson();
        // dd($user_current_lesson);
        return new UserCurrentLessonResource($user_current_lesson);
        // $user_id = 1;
        // $current_lesson = UserCourseMenegment::where('user_id', 1)->with('course_languages','lessons','lessons.lesson_translations','lessons.tasks')->get()->last();
        // return new UserCurrentLessonResource($current_lesson);

    }
}

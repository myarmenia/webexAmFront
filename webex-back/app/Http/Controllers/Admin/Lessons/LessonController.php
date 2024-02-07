<?php

namespace App\Http\Controllers\Admin\Lessons;

use App\Http\Controllers\Controller;
use App\Http\Requests\LessonRequest;
use App\Interfaces\Lesson\LessonRepositoryInterface;
use App\Models\CourseLanguage;
use App\Models\Lesson;
use App\Models\LessonTranslation;
use App\Services\FileUploadService;
use App\Traits\Course\CourseLanguagesTrait;
use Illuminate\Http\Request;

class LessonController extends Controller
{
  use CourseLanguagesTrait;
    /**
     * Display a listing of the resource.
     */
    private $lessonRepository;

    public function __construct(LessonRepositoryInterface $lessonRepository){

      $this->lessonRepository = $lessonRepository;

    }

    public function index(Request $request)
    {

      $lessons = $this->lessonRepository->allLessons();

      return view('content.lessons.index',compact('lessons'))->with('i', ($request->input('page', 1) - 1) * 10);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
      
      $course_language = CourseLanguage::all();
      return view('content.lessons.create',compact('course_language'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(LessonRequest $request)
    {

      $lesson=$this->lessonRepository->storeLesson($request);

      if($lesson){
        // dd(111);
        return redirect()->route('lesson-list');
      }

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {

      $lesson = $this->lessonRepository->editLesson($id);

      $course_language = $this->getAllCourseLanguages();

        return view('content.lessons.edit',compact('lesson','course_language'));

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(LessonRequest $request, string $id)
    {

      $updateLesson=$this->lessonRepository->updateLesson($request,$id);
      if($updateLesson){
        return back();
      }

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}

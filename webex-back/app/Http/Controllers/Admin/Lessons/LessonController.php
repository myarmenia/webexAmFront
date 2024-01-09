<?php

namespace App\Http\Controllers\Admin\Lessons;

use App\Http\Controllers\Controller;
use App\Http\Requests\LessonRequest;
use App\Models\CourseLanguage;
use App\Models\Lesson;
use App\Models\LessonTranslation;
use App\Services\FileUploadService;
use Illuminate\Http\Request;

class LessonController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

      $lessons=Lesson::with(['course_languages','lesson_translations'])->get();

      return view('content.lessons.index',compact('lessons'));
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

      $lesson = Lesson::create($request->only(['course_language_id','duration']));
      if($request->has('video')){

        $path=FileUploadService::upload($request->video,'lessons/'.$lesson->id);
        $lesson->video=$path;
        $lesson->save();
        if($lesson){
          foreach($request->translate as $key => $lang){

            $request['lesson_id'] = $lesson->id;
            $request['title'] = $lang['title'];
            $request['description'] = $lang['description'];
            $request['lang'] = $key;
            $lessontranlate = LessonTranslation::create($request->only(['lesson_id','title','description','lang']));

          }
          return back();

        }

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

        $lesson = Lesson::where('id',$id)->with(['lesson_translations','course_languages'])->get();
        $course_language = CourseLanguage::all();

        return view('content.lessons.edit',compact('lesson','course_language'));

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}

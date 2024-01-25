<?php

namespace App\Http\Controllers\Admin\Courses;

use App\Http\Controllers\Controller;
use App\Http\Requests\CourseLanguageRequest;
use App\Models\CourseLanguage;
use App\Models\CourseLanguageTranslation;
use App\Services\FileUploadService;
use App\Traits\Course\CourseLanguagesTrait;
use Illuminate\Http\Request;

class CourseLanguageController extends Controller
{
  use CourseLanguagesTrait;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $course_language = $this->getAllCourseLanguages()->sortByDesc('id');

        return view('content.courses.course-language',compact('course_language'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
      return view('content.courses.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CourseLanguageRequest $request)
    {
dd($request->all());
      $cours_language = CourseLanguage::create($request->only(['name']));

      if($cours_language){
        $path = FileUploadService::upload($request->upload_file,'course_language_logo/'.$cours_language->id);
        $cours_language->logo = $path;
        $cours_language->save();

        foreach($request->translate as $key => $lang){

            $request['course_language_id'] = $cours_language->id;
            $request['description'] = $lang['description'];
            $request['lang'] = $key;

            $cours_language_tranlate = CourseLanguageTranslation::create($request->only(['course_language_id','description','lang']));

          }
      }

      return redirect()->route('course-language');
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
        $course_language=CourseLanguage::where('id',$id)->first();
        return view('content.courses.edit',compact('course_language'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CourseLanguageRequest $request, string $id)
    {

      $course_language=CourseLanguage::where('id',$id)->first();

      if($course_language){
        if($request->has('upload_file')){

            $path = FileUploadService::upload($request->upload_file,'course_language_logo/'.$course_language->id);
            $course_language->logo = $path;
            $course_language->save();

        }
        $course_language->name=$request->name;
        $course_language->save();


        foreach($request->translate as $key => $lang){
            $request['course_language_id'] = $course_language->id;
            $request['description'] = $lang['description'];
            $request['lang'] = $key;

            $course_language_translate = CourseLanguageTranslation::where([
              ['course_language_id','=', $id],
              ['lang','=',$key]
            ])->first();

            $course_language_translate->description =  $lang['description'];
            $course_language_translate->save();
        }
        return redirect()->back();
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

<?php

namespace App\Http\Controllers\Admin\Courses;

use App\Http\Controllers\Controller;
use App\Http\Requests\CourseLanguageRequest;
use App\Models\CourseLanguage;
use App\Models\CourseLanguageTranslation;
use App\Services\FileUploadService;
use Illuminate\Http\Request;

class CourseLanguageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $course_language = CourseLanguage::all();

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
        //
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

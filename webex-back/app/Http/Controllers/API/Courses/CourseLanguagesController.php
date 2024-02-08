<?php

namespace App\Http\Controllers\API\Courses;

use App\Http\Controllers\API\BaseController;
use App\Http\Controllers\Controller;
use App\Http\Resources\CourseLanguageResource;
use App\Models\CourseLanguage;
use App\Models\UserCourseMenegment;
use App\Traits\Course\CourseLanguagesTrait;
use Illuminate\Http\Request;

class CourseLanguagesController extends BaseController
{
  use CourseLanguagesTrait;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user_id = auth('api')->user()->id;

        $course_languages =$this->getAllCourseLanguages();
        $user_course_manegment = UserCourseMenegment::where('user_id',$user_id)->with('course_languages','lessons','lessons.lesson_translations','lessons.tasks')->get()->last();
        return  $this->sendResponse(CourseLanguageResource::collection($course_languages), 'success');


    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
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

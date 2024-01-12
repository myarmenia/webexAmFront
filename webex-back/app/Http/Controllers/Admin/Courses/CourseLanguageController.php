<?php

namespace App\Http\Controllers\Admin\Courses;

use App\Http\Controllers\Controller;
use App\Http\Requests\CourseLanguageRequest;
use App\Models\CourseLanguage;
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
     
      CourseLanguage::create($request->only(['name']));
      return back();
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

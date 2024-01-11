<?php

namespace App\Http\Controllers\API\Lessons;

use App\Http\Controllers\API\BaseController;
use App\Http\Controllers\Controller;
use App\Models\Lesson;
use Illuminate\Http\Request;

class LessonController extends BaseController
{
    /**
     * Display a listing of the resource.
     */

    public function languageLessons(Request $request,$id)
    {

      $lessons = Lesson::where('course_language_id',$request->id)->with(['lesson_translations'])->get();
        dd($lessons);
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

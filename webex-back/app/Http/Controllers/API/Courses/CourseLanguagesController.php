<?php

namespace App\Http\Controllers\API\Courses;

use App\Http\Controllers\API\BaseController;
use App\Http\Controllers\Controller;
use App\Http\Resources\CourseLanguageResource;
use App\Models\CourseLanguage;
use Illuminate\Http\Request;

class CourseLanguagesController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $course_languages=CourseLanguage::all();
        
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

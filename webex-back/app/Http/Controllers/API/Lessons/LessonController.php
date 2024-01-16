<?php

namespace App\Http\Controllers\API\Lessons;

use App\Http\Controllers\API\BaseController;
use App\Http\Controllers\Controller;
use App\Http\Resources\FirstLessonTasksResource;
use App\Http\Resources\LanguageLessonsResource;
use App\Http\Resources\TasksResource;
use App\Models\CourseLanguage;
use App\Models\Lesson;
use Illuminate\Http\Request;

class LessonController extends BaseController
{
    /**
     * Display a listing of the resource.
     */

    public function languageLessons(Request $request,$id)
    {

      $lessons = Lesson::where('course_language_id',$request->id)
                ->with('lesson_translations')
                ->get();
// dd($lessons);
                $lessons_array=[];

                foreach ($lessons as $key => $item) {

                  if($key==0){

                    $first_elem = [
                      'id' => $item->id,
                      'number' => $item->number,
                      'duration' => $item->duration,
                      'title' => $item->translation(session('languages'))->title,
                      'description' => $item->translation(session('languages'))->description,
                      'video'=>$item->video,
                      'tasks'=> TasksResource::collection($item->tasks),
                    ];
                    array_push($lessons_array,$first_elem);

                  }else{
                    $element = new LanguageLessonsResource($item);
                    array_push($lessons_array,$element);
                  }
                }

                return $this->sendResponse($lessons_array, 'success');


    }
// ====

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

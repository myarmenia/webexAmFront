<?php

namespace App\Http\Controllers\Admin\Tasks;

use App\Http\Controllers\Controller;
use App\Http\Requests\TaskRequest;
use App\Models\Lesson;
use App\Models\Task;
use App\Models\TaskTranslation;
use App\Services\FileUploadService;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      $tasks=Task::with('task_translations')->get();
      // dd($tasks);
      return view('content.tasks.index',compact('tasks'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
      $lessons = Lesson::with('lesson_translations')->get();
// dd($lessons[0]->lesson_translations);
      return view('content.tasks.create',compact('lessons'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TaskRequest $request)
    {
      // dd($request->all());
      $task = Task::create($request->only(['lesson_id','duration']));
      if($request->has('video')){
        $path=FileUploadService::upload($request->video,$request->lesson_id.'/tasks/'.$task->id);
        $task->video=$path;
        $task->save();
      }

      if($task){
        foreach($request->translate as $key => $lang){

          $request['task_id'] = $task->id;

          $request['description'] = $lang['description'];
          $request['lang'] = $key;

          $task_translation = TaskTranslation::create($request->only(['task_id','description','lang']));

        }
        return back();

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

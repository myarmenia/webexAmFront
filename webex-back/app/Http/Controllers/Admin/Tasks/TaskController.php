<?php

namespace App\Http\Controllers\Admin\Tasks;

use App\Http\Controllers\Controller;
use App\Http\Requests\TaskRequest;
use App\Interfaces\Task\TaskRepositoryInterface;
use App\Models\CourseLanguage;
use App\Models\Lesson;
use App\Models\Task;
use App\Models\TaskTranslation;
use App\Services\FileUploadService;
use App\Traits\Lesson\LessonsTrait;
use Illuminate\Http\Request;

class TaskController extends Controller
{
  use LessonsTrait;
    /**
     * Display a listing of the resource.
     */
    private $taskRepository;
    public function __construct(TaskRepositoryInterface $taskRepository){

      $this->taskRepository = $taskRepository;

    }

    public function index(Request $request)
    {

      $tasks = $this->taskRepository->allTasks($request->all());

      return view('content.tasks.index',compact('tasks'))->with('i',($request->input('page', 1) - 1) * 10);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
      $lessons = Lesson::with('lesson_translations')->get();
      return view('content.tasks.create',compact('lessons'));
    }

    /**
     * Store a newly created resource in storage.
     */
    // ---------------
    public function store(TaskRequest $request)
    {

      $storeTask = $this->taskRepository->storeTask($request);

      if($storeTask){

        return redirect()->route('task-list');
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

      $lessons = $this->getAllLesson();
      $task =$this->taskRepository->editTask($id);

      return view('content.tasks.edit',compact('task','lessons'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TaskRequest $request, string $id)
    {

        $task = $this->taskRepository->updateTasks( $request, $id);
        if($task){
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

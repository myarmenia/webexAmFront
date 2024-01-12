<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserCurrentLessonResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {

        return [
          "id" => $this->id,
          "user_id" => $this->user_id,
          "course_language_id" => $this->course_languages->name,
          "lesson_id"=>$this->lesson_id,
          //// "lessons" =>LessonResource::collection($this->lessons),
          "lessons" =>$this->lessons->translation($request->lang),

          "tasks"=>TasksResource::collection($this->lessons->tasks)

        ];
    }
}

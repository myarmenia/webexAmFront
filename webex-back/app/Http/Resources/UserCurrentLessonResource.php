<?php

namespace App\Http\Resources;

use App\Models\CourseLanguage;
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
          "course_language_id"=>$this->course_language_id,
          "course_language_name" => $this->course_languages->name,
          // "lesson_id"=>$this->lesson_id,
          //// "lessons" =>LessonResource::collection($this->lessons),
          // "current_lesson" =>$this->lessons->translation($request->lang),
          "current_lesson" =>new CurrentLessonResource($this->lessons),
          "lessons"=>$this->course_languages->lessons,
          "lessons"=>LanguageLessonsResource::collection($this->course_languages->lessons),
          "active_cource"=>$this->course_language_id,
          "all_courses"=> CourseLanguage::all(),


        ];
    }
}

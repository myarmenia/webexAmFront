<?php

namespace App\Http\Resources;

use App\Models\CourseLanguage;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class GetOpendLessonResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
    
        // return [

        //   "course_language_id"=>$this->course_language_id,
        //   "course_language_name" => $this->course_languages->name,
        //   "current_lesson_number" =>$this->number,
        //   "current_lesson" =>new CurrentLessonResource($this),
        //   "lessons"=>LanguageLessonsResource::collection($this->course_languages->lessons),
        //   "active_cource"=>$this->course_language_id,
        //   "all_courses"=> CourseLanguage::all(),

        // ];
        return [

          "course_language_id"=>$this['lesson']->course_language_id,
          "course_language_name" => $this['lesson']->course_languages->name,
          "current_lesson_number" =>$this['current_lesson_number'],
          "current_lesson" =>new CurrentLessonResource($this['lesson']),
          "lessons"=>LanguageLessonsResource::collection($this['lesson']->course_languages->lessons),
          "active_cource"=>$this['lesson']->course_language_id,
          "all_courses"=> CourseLanguage::all(),

        ];
    }
}

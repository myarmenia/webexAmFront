<?php

namespace App\Http\Resources\Student;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CourseMenegmenResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
          "id" => $this->course_languages->id,
          "name" => $this->course_languages->name,
          "logo" => $this->course_languages->logo,
          "total_lessons" => $this->course_languages->lessons->count(),
          "current_lesson_number" => $this->lesson_number
        ];
    }
}

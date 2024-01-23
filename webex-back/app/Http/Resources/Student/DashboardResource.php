<?php

namespace App\Http\Resources\Student;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Traits\Course\CourseLanguagesTrait;
use App\Http\Resources\CourseLanguageResource;

class DashboardResource extends JsonResource
{
    use CourseLanguagesTrait;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $account = [
                    'id' => $this->id,
                    'avatar' => $this->avatar ? route('get-file', ['path' => $this->avatar]) : null,
                    'name'=> $this->name,
        ];

        $visit_history = [
                    'total_lesson_days' => 12,
                    'lesson_quantity' => $this->lesson_quantity
        ];

        $all_courses = [
            'total_languages' => $this->getAllCourseLanguages()->count(),
            'active_languages_quantity' => $this->user_course_menegments->count()
        ];

        $languages[] =  $all_courses;
        $user_course_menegments = $this->user_course_menegments;

        foreach ($user_course_menegments as $key => $value) {
            $k = $value->course_languages->name;
            $languages[] = new CourseMenegmenResource($value);
        }
           
        return [
            'dashboard' => [
                'account' => $account,
                'visit_history' => $visit_history
            ],

            'my_training' => $languages             
            

        ];
    }
}

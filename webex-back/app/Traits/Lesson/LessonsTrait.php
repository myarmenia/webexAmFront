<?php
namespace App\Traits\Lesson;

use App\Models\Lesson;

trait LessonsTrait
{
  public function getAllLesson(){
    
    return Lesson::with('lesson_translations')->get();

  }

}

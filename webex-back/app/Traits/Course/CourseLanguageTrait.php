<?php

namespace App\Traits\Course;

use App\Models\CourseLanguage;

trait CourseLanguageTrait
{
  public function getCourseLanguage(int $id)
  {

    return CourseLanguage::find($id);
  }
}

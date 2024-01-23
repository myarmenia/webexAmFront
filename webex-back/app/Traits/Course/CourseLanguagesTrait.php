<?php
namespace App\Traits\Course;

use App\Models\CourseLanguage;

trait CourseLanguagesTrait
{
  public function getAllCourseLanguages(){

    return CourseLanguage::all();
  }
}

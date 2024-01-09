<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{
    use HasFactory;
    protected $guarded=[];



    public function course_languages(){

      return $this->belongsTo(CourseLanguage::class,'course_language_id');
    }
    public function lesson_translations(){

      return  $this->hasMany(LessonTranslation::class);

    }
    public function tasks(){

      return  $this->hasMany(Task::class);

    }
}

<?php
namespace App\Interfaces\Lesson;

Interface LessonRepositoryInterface
{

  public function allLessons();
  public function storeLesson($request);
  public function editLesson($id);
  public function updateLesson($data, $id);

}

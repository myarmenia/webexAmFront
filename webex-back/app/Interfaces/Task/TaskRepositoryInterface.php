<?php
namespace App\Interfaces\Task;

Interface TaskRepositoryInterface
{
  public function allTasks($request);
  public function storeTask($request);
  public function editTask($id);
  public function updateTasks($request, $id);

}


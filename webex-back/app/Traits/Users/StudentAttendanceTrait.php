<?php
namespace App\Traits\Users;

use App\Models\StudentAttendance;

trait StudentAttendanceTrait
{
  public function getLastRow(int $id)
  {
    return StudentAttendance::where('user_id', $id)->latest()->first();
  }

  public function getAll(int $id)
  {
    return StudentAttendance::where('user_id', $id)->get();
  }
}

<?php

namespace App\Services\Users;

use App\Models\StudentAttendance;

class StudentIsPresentService
{
  public static function update($user, $student_attendance)
  {

    if ($user) {

      try {

        $lesson_quantity = $user->lesson_quantity  + 1;
        $lessons_quantity_per_month = $user->lessons_quantity_per_month;

        if ($lesson_quantity <=  $lessons_quantity_per_month) {

            $stage_number = $student_attendance->count() > 0 ? $student_attendance->stage_number : 1;
            $user->update(['lesson_quantity' => $lesson_quantity]);
        }
        else{
            $lesson_quantity = 1;
            $stage_number = $student_attendance->count() > 0 ? $student_attendance->stage_number + 1 : 1;

          $user->update(['lesson_quantity' => $lesson_quantity, 'payment_status' => 0]);
        }

        StudentAttendance::create([
          'user_id' => $user->id,
          'lesson_number' => $lesson_quantity,
          'lessons_quantity_per_month' => $lessons_quantity_per_month,
          'stage_number' => $stage_number
        ]);

        return $lesson_quantity;

      } catch (\Exception $exception) {

        $errorInfo = $exception->getMessage();

        return $errorInfo;
      }
    }
  }
}

<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\DB;

class DeleteItemService
{
  public static function delete($tb_name, $id)
  {
    $item = DB::table($tb_name)->where('id', $id);
    $delete = $item ? $item->delete() : false;

    return $delete;
  }
}

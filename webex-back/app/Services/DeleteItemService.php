<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class DeleteItemService
{
  public static function delete($tb_name, $id)
  {
    $item = DB::table($tb_name)->where('id', $id);
    $file_path = '';
    $item_db = $item->first();
    if(isset($item_db->logo)){
        $file_path = $item_db->logo;
    }
    if(isset($item_db->avatar)){
      $file_path = $item_db->avatar;
    }
    if(isset($item_db->video)){
      $file_path = $item_db->video;
    }
    if(isset($item_db->path)){
      $file_path = $item_db->path;
    }

    Storage::delete($file_path);
    $delete = $item ? $item->delete() : false;

    return $delete;
  }
}

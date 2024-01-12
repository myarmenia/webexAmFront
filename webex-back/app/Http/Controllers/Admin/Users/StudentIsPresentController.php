<?php

namespace App\Http\Controllers\Admin\Users;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class StudentIsPresentController extends Controller
{
    public function index($id){
       
        $user = User::find($id);
        $lesson_quantity = $user->lesson_quantity  + 1;

        $update = $user->update(['lesson_quantity' => $lesson_quantity]);

        if($update){
          return response()->json(['result' => $lesson_quantity]);
        }

      
    }
}

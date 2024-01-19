<?php

namespace App\Http\Controllers\API\Student;

use App\Http\Controllers\API\BaseController;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\Users\GetUserTrait;
use App\Http\Resources\Student\DashboardResource;


class DashboardController extends BaseController
{
    
    public function index(){
     
        $user = auth('api')->user();
        // dd($user);
        // $course_languages = CourseLanguage::all();

        return  $this->sendResponse(new DashboardResource($user), 'success');
    }
}

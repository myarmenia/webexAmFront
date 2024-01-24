<?php

namespace App\Http\Controllers\API\Student;

use App\Http\Controllers\API\BaseController;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\Student\CourseMenegmentTrait;
use App\Http\Resources\Student\CourseMenegmenResource;

class VisitHistoryController extends BaseController
{
    use CourseMenegmentTrait;

    public function index(){
        $user = auth('api')->user();
        $course_menegment = $this->getAllCourseMenegment($user->id);

        return  $this->sendResponse(CourseMenegmenResource::collection($course_menegment), 'success');
    }
}

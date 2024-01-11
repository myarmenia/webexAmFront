<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\API\ForgotPasswordRequest;
use App\Services\API\ForgotPasswordService;
use Illuminate\Http\Request;

class ForgotPasswordController extends Controller
{

    protected $forgotPasswordService;

    public function __construct(ForgotPasswordService $forgotPasswordService)
    {
        $this->forgotPasswordService = $forgotPasswordService;
    }

    public function sendResetLink(Request $request)
    {
       $message = $this->forgotPasswordService->sendResetLink($request->get('email'));

       return response()->json(['message' => $message]);
    }

    public function checkForgotToken(Request $request)
    {
        $haveOrNot = $this->forgotPasswordService->checkForgotToken($request->all());

        if($haveOrNot){
            return response()->json(['success' => true]);
        }

        return response()->json(['success' => false]);

    }
}

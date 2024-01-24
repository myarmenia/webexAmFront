<?php

namespace App\Http\Controllers\API\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\ChangePasswordRequest;
use App\Http\Requests\EditRequest;
use App\Services\API\UserService;
use Illuminate\Http\Request;

class UserController extends Controller
{

    protected $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    public function edit(EditRequest $request)
    {
        $user = $this->userService->edit($request->all());

        if($user){
            return response()->json(['user' => $user, 'success' => true], 200);
        }

        return response()->json(translateMessageApi('something-went-wrong'), 500);
    }

    public function editPassword(ChangePasswordRequest $request)
    {
        dd($request->all());
        $change = $this->userService->editPassword($request);

        if($change){
            return response()->json(['success' => true, 'message' => translateMessageApi('password-changed')], 200);
        }

        return response()->json(translateMessageApi('something-went-wrong'), 500);
        

    }
    
}

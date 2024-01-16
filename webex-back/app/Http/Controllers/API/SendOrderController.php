<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Mail\SendOrderEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Mail;

class SendOrderController extends Controller
{
    public function __invoke(Request $request)
    {
        $data = $request->all();
        $data['projectType'] = Arr::join($request->projectType, ', ', ' и ');

        $result = Mail::send(new SendOrderEmail($data));

        if($result){
            return response()->json(['success' => true, 'message' => translateMessageApi('email-send')]);
        }

        return response()->json(['success' => false, 'message' => translateMessageApi('something-went-wrong')]);

    }
}

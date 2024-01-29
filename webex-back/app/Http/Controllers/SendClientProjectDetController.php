<?php

namespace App\Http\Controllers;

use App\Mail\ClientProjectEmail;
use Illuminate\Http\Request;
use Mail;

class SendClientProjectDetController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $data = $request->all();
        $result = Mail::send(new ClientProjectEmail($data));

        if($result){
            return response()->json(['success' => true, 'message' => translateMessageApi('email-send')]);
        }

        return response()->json(['message' => translateMessageApi('something-went-wrong')], 500);
    }
}

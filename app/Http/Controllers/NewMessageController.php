<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Events\NewMessage;
use Illuminate\Support\Facades\Auth;

class NewMessageController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $user = Auth::guard('web')->user();
        broadcast(new NewMessage($request->message, $user))->toOthers();
    }
}

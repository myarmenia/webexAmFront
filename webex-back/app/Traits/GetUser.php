<?php
namespace App\Traits;
use App\Models\User;

trait GetUser
{
    public function getUser(int $id)
    {
        return User::find($id);
    }
}
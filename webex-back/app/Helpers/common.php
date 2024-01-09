<?php 

function customUserResource($data)
{
    return [
        'id' => $data->id,
        'name' => $data->name,
        'avatar' => $data->avatar,
        'passport' => $data->passport,
        'phone' => $data->phone,
        'created_at' => $data->created_at,
        'updated_at' => $data->updated_at,
    ];
}
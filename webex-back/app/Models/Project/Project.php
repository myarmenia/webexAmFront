<?php

namespace App\Models\Project;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'process_time', 
        'creation_date_at',
        'link_project',
        'link_app_store',
        'link_play_market',
        'type',
    ];

    protected $table = 'projects';

    const TYPE_WEB = 'web';
    const TYPE_MOBILE = 'mobile';
    const TYPE_3D = '3d';
}

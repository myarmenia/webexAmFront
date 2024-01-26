<?php

namespace App\Models\News;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NewsCategoryTranslations extends Model
{
    use HasFactory;

    protected $table = 'news_category_translations';

    protected $fillable = [
        'news_category_id',
        'name',
        'lang',
    ];
}

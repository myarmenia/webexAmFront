<?php

namespace App\Models\News;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NewsCategory extends Model
{
    use HasFactory;

    protected $table = 'news_categories';

    protected $fillable = [
        'type',
    ];

    public function translations()
    {
        return $this->hasMany(NewsCategoryTranslations::class, 'news_category_id', 'id');
    }
}

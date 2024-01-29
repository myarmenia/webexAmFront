<?php
namespace App\Repositories\News;

use App\Interfaces\News\NewsInterface;
use App\Models\News\News;
use App\Models\News\NewsCategory;
use App\Models\News\NewsTranslations;

class NewsRepository implements NewsInterface{

    public function createNews($categoryId)
    {
        $news = News::create([
            "news_category_id" => $categoryId
        ]);

        return $news;
    }

    public function createNewsData($data)
    {
        return NewsTranslations::insert($data);
    }

    public function getNewsByCategories()
    {
        return News::with(['images', 'category','translations'])
        ->paginate(10)
        ->groupBy('news_category_id');
    }
   

}
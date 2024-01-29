<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\News\NewsResourceByCategory;
use App\Services\API\News\NewsService;

class NewsController extends Controller
{
    protected $newsService;

    public function __construct(NewsService $newsService)
    {
        $this->newsService = $newsService;
    }

    public function getNewsByCategories()
    {
        $news = $this->newsService->getNewsByCategories();

        return NewsResourceByCategory::collection($news);
    }
   
}

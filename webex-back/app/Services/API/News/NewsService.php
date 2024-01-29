<?php
namespace App\Services\API\News;
use App\Repositories\News\NewsRepository;

class NewsService
{
    protected $newsRepository;

    public function __construct(NewsRepository $newsRepository)
    {
        $this->newsRepository = $newsRepository;
    }
    public function getNewsByCategories()
    {
        return $this->newsRepository->getNewsByCategories();
       
    }

}
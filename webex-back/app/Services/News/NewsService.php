<?php
namespace App\Services\News;

class NewsService
{
    protected $newsCategoryService;

    public function __construct(NewsCategoryService $newsCategoryService)
    {
        $this->newsCategoryService = $newsCategoryService;
    }

    public function getCategoryList()
    {   
        $categoryList = $this->newsCategoryService->getCategoryListAdmin();
        $readyList = $this->newsCategoryService->customCategoryResAdmin($categoryList);
        
        return $readyList;
    }

}
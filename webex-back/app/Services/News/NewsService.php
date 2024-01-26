<?php
namespace App\Services\News;
use App\Repositories\News\NewsRepository;
use App\Services\FileUploadService;

class NewsService
{
    protected $newsCategoryService;

    protected $newsRepository;

    public function __construct(NewsCategoryService $newsCategoryService, NewsRepository $newsRepository)
    {
        $this->newsCategoryService = $newsCategoryService;
        $this->newsRepository = $newsRepository;
    }

    public function getCategoryList()
    {   
        $categoryList = $this->newsCategoryService->getCategoryListAdmin();
        $readyList = $this->newsCategoryService->customCategoryResAdmin($categoryList);
        
        return $readyList;
    }

    public function createNews($data)
    {
        $news = $this->newsRepository->createNews($data['category']);
        
        $title = $data['title'];
        $description = $data['description'];
        $dataNews = [];

        $lang = languages();

        foreach ($lang as $val) {
           $dataNews[] = [
               'news_id' => $news->id,
               'title' => $title[$val],
               'description' => $description[$val],
               'lang' => $val
           ]; 
        }

        $newsData = $this->newsRepository->createNewsData($dataNews);

        if($photo = $data['photo'] ?? null){
            $path = FileUploadService::upload($photo, 'news/'.$news->id);

            $photoData = [
                'path' => $path,
                'name' => $photo->getClientOriginalName() 
            ];

            $news->images()->create($photoData);
        }

        if($newsData){
            session(['success' => 'Операция выполнена успешно']);

            return true;
        }
        
        session(['errorMessage' => 'Что то пошло не так. Попробуйте еще раз.']);

        return false;
    }

    public function customNewsResource($data)
    {
        $readyResource = [];
        foreach ($data as $key => $val) {

            $readyResource[] = [
                'id' => $val->id,
                'images' => isset($val->images) && count($val->images) > 0? route('get-file', ['path' => $val->images[0]->path]) : null,
                'title' => $val->translations[0]->title,
                'category' => $val->category->type,
                'created_at'=> $val->created_at,
            ];
        }

        return $readyResource;

    }

}
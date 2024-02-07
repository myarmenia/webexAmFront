<?php
namespace App\Services\News;
use App\Repositories\News\NewsCategoryRepository;
use App\Models\News\NewsCategory;


class NewsCategoryService
{

    protected $newsCategoryRepository;

    public function __construct(NewsCategoryRepository $newsCategoryRepository)
    {
        $this->newsCategoryRepository = $newsCategoryRepository;
    }

    public function createCategory($data)
    {
        $addAndGetIdCategoryId = $this->newsCategoryRepository->createNewsCategory($data['type']);
        $addTranslation = $this->newsCategoryRepository->addTranslation($addAndGetIdCategoryId, $data['translate']);

        if($addTranslation){
            session(['success' => 'Операция выполнена успешно']);

            return true;
        }
        
        session(['errorMessage' => 'Что то пошло не так. Попробуйте еще раз.']);

        return false;
    }

    public function customResource($data)
    {
        $readyResource = [];
        foreach ($data as $key => $val) {

            $readyResource[] = [
                'id' => $val->id,
                'type' => $val->type,
                'translations' => $val->translations->keyBy('lang')
            ];
        }

        return $readyResource;
    }

    public function getCategoryListAdmin()
    {
        return $this->newsCategoryRepository->getCategoryListAdmin();
    }

    public function customCategoryResAdmin($data)
    {
        $readyResource = [];

        foreach ($data as $key => $val) {

            $readyResource[] = [
                'id' => $val->id,
                'type' => $val->type,
                'translations' => $val->translations[0]->name
            ];
        }

        return $readyResource;
    }

     public function updateNewsCategory($data, $id){

        $news_category = $this->newsCategoryRepository->getCategory($id);
        $news_category->update(['type' => $data['type']]);
        

        foreach ( $news_category->translations as $key => $value) {
           $value->update(['name' => $data['translate'][$value->lang]]);
        }

        
        return $news_category;
        

    }

}
<?php
namespace App\Repositories\News;

use App\Interfaces\News\NewsCategoryInterface;
use App\Models\News\NewsCategory;
use App\Models\News\NewsCategoryTranslations;

class NewsCategoryRepository implements NewsCategoryInterface{
    public function createNewsCategory($type)
    {
        $type = NewsCategory::create(['type' => $type]);
        return $type->id;
    }

    public function addTranslation($id, $translate)
    {
        $type = NewsCategory::find($id);

        if($type){

            $translationData = [
                ['name' => $translate['am'], 'lang' => 'am', 'news_category_id' => $id],
                ['name' => $translate['ru'], 'lang' => 'ru', 'news_category_id' => $id],
                ['name' => $translate['en'], 'lang' => 'en', 'news_category_id' => $id],
            ];

           $addedLanguages =  NewsCategoryTranslations::insert($translationData);

            if($addedLanguages){
                return true;
            } 

        }

        return false;
    }
}
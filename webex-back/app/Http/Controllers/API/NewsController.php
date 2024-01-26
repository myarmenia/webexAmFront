<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\News\CreateNewsRequest;
use App\Http\Resources\Project\ProjectResource;
use App\Models\News\News;
use App\Models\News\NewsCategory;
use App\Services\News\NewsService;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    protected $newsService;

    public function __construct(NewsService $newsService)
    {
        $this->newsService = $newsService;
    }

    public function index(Request $request)
    {
        $data = News::orderBy('id', 'DESC')->paginate(5);

        return view('content.news.index', compact('data'))
               ->with('i', ($request->input('page', 1) - 1) * 5);
    }

    public function createNewsPage()
    {
        $categoryList = $this->newsService->getCategoryList();
       
        return view('content.news.create', compact('categoryList'));
    }

    public function createNews(CreateNewsRequest $request)
    {
        $createNews = $this->newsService->createNews($request->all());

        $data = News::orderBy('id', 'DESC')->paginate(5);

        return view('content.news.index', compact('data'))
               ->with('i', ($request->input('page', 1) - 1) * 5);

    }

    // public function create()
    // {
    //     return view('content.project.create');
    // }

    // public function addProject(Request $request)
    // {

    //     $createProj = $this->projectService->createProject($request->all());
    //     if($createProj){
    //         $data = Project::orderBy('id', 'DESC')->paginate(5);

    //         return redirect()->route('project')
    //               ->with('i', ($request->input('page', 1) - 1) * 5);
    //     }
    // }

    // public function getProject()
    // {
    //     $project = $this->projectService->getProject();

    //     return ProjectResource::collection($project);
    // }

}

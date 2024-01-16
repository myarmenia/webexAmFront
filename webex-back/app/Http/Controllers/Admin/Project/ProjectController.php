<?php

namespace App\Http\Controllers\Admin\Project;

use App\Http\Controllers\Controller;
use App\Models\Project\Project;
use App\Services\ProjectService;
use Illuminate\Http\Request;

class ProjectController extends Controller
{

    protected $projectService;

    public function __construct(ProjectService $projectService)
    {
        $this->projectService = $projectService;
    }

    public function index(Request $request)
    {
        $data = Project::orderBy('id', 'DESC')->paginate(5);

        return view('content.project.index', compact('data'))
               ->with('i', ($request->input('page', 1) - 1) * 5);
    }

    public function create()
    {
        return view('content.project.create');
    }

    public function addProject(Request $request)
    {
        // $this->validate($request, [
        //     'name' => 'required',
        //     'email' => 'required|email|unique:users,email',
        //     'password' => 'required|same:confirm-password',
        //     'roles' => 'required'
        // ]);

        // $input = $request->all();
        // $input['password'] = Hash::make($input['password']);

        // $user = User::create($input);
        // $user->assignRole($request->input('roles'));
        // $user->assignRole(['student']);


        // return redirect()->route('users.index')
        // ->with('success', 'User created successfully');
    }

    // public function show($id)
    // {
    //     $user = User::find($id);
    //     // return view('users.show', compact('user'));
    // }

    // public function edit($id)
    // {
    //     $user = User::find($id);
    //     $roles = Role::pluck('name', 'name')->all();
    //     $userRole = $user->roles->pluck('name', 'name')->all();

    //     return view('users.edit', compact('user', 'roles', 'userRole'));
    // }

    // public function update(Request $request, $id)
    // {
    //     $this->validate($request, [
    //         'name' => 'required',
    //         'email' => 'required|email|unique:users,email,' . $id,
    //         'password' => 'same:confirm-password',
    //         'roles' => 'required'
    //     ]);

    //     $input = $request->all();
    //     if (!empty($input['password'])) {
    //         $input['password'] = Hash::make($input['password']);
    //     } else {
    //         $input = Arr::except($input, array('password'));
    //     }

    //     $user = User::find($id);
    //     $user->update($input);
    //     DB::table('model_has_roles')->where('model_id', $id)->delete();

    //     $user->assignRole($request->input('roles'));

    //     return redirect()->route('users.index')
    //     ->with('success', 'User updated successfully');
    // }

    // public function destroy($id)
    // {
    //     User::find($id)->delete();
    //     return redirect()->route('users.index')
    //     ->with('success', 'User deleted successfully');
    // }
}

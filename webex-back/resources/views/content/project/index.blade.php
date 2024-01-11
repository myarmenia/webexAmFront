@extends('layouts/contentNavbarLayout')

@section('title', 'Account settings - Account')
@section('page-script')
    <script src="{{ asset('assets/js/change-status.js') }}"></script>
    <script src="{{ asset('assets/js/111.js') }}"></script>
@endsection

@section('content')

    <h4 class="py-3 mb-4">
        <span class="text-muted fw-light">Проекты /</span> Список
    </h4>
    <div class="card">

        <div class="d-flex justify-content-between align-items-center">
            <div>
                <h5 class="card-header">Список проектов</h5>
            </div>
            <div>
                <a href="{{ route('create-project') }}" class="btn btn-primary mx-4">Создать нового проект </a>
            </div>
        </div>
        <div class="card-body">

            <div class="table-responsive text-nowrap">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Названия</th>
                            <th>Время изготов.</th>
                            <th>Дата создания</th>
                            <th>Ссылка проект</th>
                            <th>Ссылка app store</th>
                            <th>Ссылка play market</th>
                            <th>Тип</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($data as $key => $project)
                            <tr>
                                <td>{{ ++$i }}</td>
                                <td>{{ $project->name }}</td>
                                <td>{{ $project->process_time }}<span>месяца</span></td>
                                <td>{{ $project->creation_date_at }}</td>
                                <td>{{ $project->link_project }}</td>
                                <td>{{ $project->link_app_store }}</td>
                                <td>{{ $project->link_play_market }}</td>
                                <td>{{ $project->type }}</td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>


@endsection
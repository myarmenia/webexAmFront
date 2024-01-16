@extends('layouts/contentNavbarLayout')

@section('title', 'Account settings - Account')
@section('page-script')
    {{-- <script src="{{ asset('assets/js/111.js') }}"></script> --}}
@endsection

@section('content')

    <h5 class="py-3 mb-4">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a href="javascript:void(0);">Пользователи</a>
                </li>
                <li class="breadcrumb-item active">Уроки студента</li>
            </ol>
        </nav>
    </h5>
    <div class="card">

        <div class="card-body">
            <div class="row d-flex justify-content-between">
                <div class="demo-inline-spacing col-md-4">

                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center">Имя
                            <span>{{ $student->name }}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">Э. почта
                            <span>{{ $student->email }}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">Телефон
                            <span>{{ $student->phone ?? '' }}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">Статус
                            @if ($student->status)
                                <span class="badge bg-label-success me-1">Активный</span>
                            @else
                                <span class="badge bg-label-danger me-1">Не активный</span>
                            @endif
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">Роли
                            <span>
                                @if (!empty($student->getRoleNames()))
                                    @foreach ($student->getRoleNames() as $v)
                                        <label>{{ $v }}</label>
                                    @endforeach
                                @endif
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="col-md-4 d-flex align-items-end">
                    <div class="w-100 ">
                        <form action={{route('open_course', $student->id)}} method="post">
                            <div class="d-flex justify-content-between ">
                                <div class=" ">
                                    <label for="course_languages" class="col-form-label">Добавить язык
                                        программирования</label>
                                    <select class="form-select" id="course_languages" name="course_language_id">

                                        <option> Языки</option>

                                        @if($course_languages != null && count($course_languages) > 0)

                                        @foreach ($course_languages as $language)
                                            @if (in_array($language->id, $user_course_langages))
                                                <option value="{{ $language->id }}">{{ $language->name }}</option>
                                            @endif
                                        @endforeach
                                        @endif

                                    </select>
                                </div>
                                <button class="ml-3 align-self-end">Открыть курс</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="table-responsive text-nowrap mt-3">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Язык прг.</th>
                            <th>Кол. уроков</th>
                            <th>Номер текущего урока</th>
                            <th>Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($student->user_course_menegments as $key => $item)
                            <tr>
                                <td>{{ ++$key }}</td>
                                <td>{{ $item->lessons->name }}</td>
                                <td>{{ $item->lessons->count() }}</td>
                                <td>{{ $item->lesson_number }}</td>

                                <td>
                                    <div class="dropdown action" data-id="{{ $user->id }}" data-tb-name="users">
                                        <button type="button" class="btn p-0 dropdown-toggle hide-arrow"
                                            data-bs-toggle="dropdown">
                                            <i class="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div class="dropdown-menu">
                                            {{-- <a class="dropdown-item present" href="{{route('users.lessons')}}">
                                              <i class="tf-icons bx bx-task"></i> Присутствует
                                          </a> --}}
                                            <a class="dropdown-item present" href="javascript:void(0);">
                                                <i class="tf-icons bx bx-task"></i> Открить урок
                                            </a>
                                            <a class="dropdown-item d-flex" href="javascript:void(0);">
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input change_status" type="checkbox"
                                                        role="switch" data-field-name="payment_status"
                                                        {{ $user->payment_status ? 'checked' : null }}>
                                                </div>Статус платежа
                                            </a>
                                            <a class="dropdown-item d-flex" href="javascript:void(0);">
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input change_status" type="checkbox"
                                                        role="switch" data-field-name="passport"
                                                        {{ $user->passport ? 'checked' : null }}>
                                                </div>Пасспорт
                                            </a>
                                            <a class="dropdown-item d-flex" href="javascript:void(0);">
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input change_status" type="checkbox"
                                                        role="switch" data-field-name="status"
                                                        {{ $user->status ? 'checked' : null }}>
                                                </div>Статус
                                            </a>
                                            <a class="dropdown-item" href="javascript:void(0);"><i
                                                    class="bx bx-edit-alt me-1"></i>Редактировать</a>
                                            <button type="button" class="dropdown-item click_delete_item"
                                                data-bs-toggle="modal" data-bs-target="#smallModal"><i
                                                    class="bx bx-trash me-1"></i>
                                                Удалить</button>
                                            {{-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#smallModal">
                                                    Small
                                                  </button> --}}
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>


    </div>


@endsection

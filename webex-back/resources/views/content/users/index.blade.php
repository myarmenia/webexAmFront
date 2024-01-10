@extends('layouts/contentNavbarLayout')

@section('title', 'Account settings - Account')
@section('page-script')
    <script src="{{ asset('assets/js/change-status.js') }}"></script>
    <script src="{{ asset('assets/js/111.js') }}"></script>
@endsection

@section('content')

    <h4 class="py-3 mb-4">
        <span class="text-muted fw-light">Пользователи /</span> Список
    </h4>
    <div class="card">

        <div class="d-flex justify-content-between align-items-center">
            <div>
                <h5 class="card-header">Список пользователей</h5>
            </div>
            <div>
                <a href="{{ route('users.create') }}" class="btn btn-primary mx-4">Создать нового пользователя </a>
            </div>
        </div>
        <div class="card-body">

            <div class="table-responsive text-nowrap">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Имя</th>
                            <th>Э. почта</th>
                            <th>Телефон</th>
                            <th>Статус</th>
                            <th>Пасспорт</th>
                            <th>Роли</th>
                            <th>Кол. уроков</th>
                            <th>Статус платежа</th>
                            <th>Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($data as $key => $user)
                            <tr>
                                <td>{{ ++$i }}</td>

                                <td>{{ $user->name }}</td>
                                <td>{{ $user->email }}</td>
                                <td>{{ $user->phone }}</td>
                                <td class="status">
                                    @if ($user->status)
                                        <span class="badge bg-label-success me-1">Активный</span>
                                    @else
                                        <span class="badge bg-label-danger me-1">Не активный</span>
                                    @endif
                                </td>
                                <td class="passport">
                                    @if ($user->passport)
                                        <span class="badge bg-label-success me-1">Активный</span>
                                    @else
                                        <span class="badge bg-label-danger me-1">Не активный</span>
                                    @endif
                                </td>
                                <td>

                                    @if (!empty($user->getRoleNames()))
                                        @foreach ($user->getRoleNames() as $v)
                                            <label>{{ $v }}</label>
                                        @endforeach
                                    @endif
                                </td>
                                <td>{{ $user->lesson_quantity }}</td>
                                <td class="payment_status">
                                    @if ($user->payment_status)
                                        <span class="badge bg-label-success me-1">Оплачено</span>
                                    @else
                                        <span class="badge bg-label-danger me-1">Не оплачено</span>
                                    @endif
                                </td>
                                <td>
                                    <div class="dropdown action" data-id="{{ $user->id }}" data-tb-name="users">
                                        <button type="button" class="btn p-0 dropdown-toggle hide-arrow"
                                            data-bs-toggle="dropdown">
                                            <i class="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item present" href="javascript:void(0);">
                                                <i class="tf-icons bx bx-task"></i> Присутствует
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
                                                    class="bx bx-edit-alt me-1"></i> Edit</a>
                                            <a class="dropdown-item" href="javascript:void(0);"><i
                                                    class="bx bx-trash me-1"></i> Delete</a>

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


{{-- <a class="btn btn-info" href="{{ route('users.show',$user->id) }}">Show</a>
<a class="btn btn-primary" href="{{ route('users.edit',$user->id) }}">Edit</a> --}}


{{-- {!! Form::open(['method' => 'DELETE','route' => ['users.destroy', $user->id],'style'=>'display:inline']) !!}
                    {!! Form::submit('Delete', ['class' => 'btn btn-danger']) !!}
                    {!! Form::close() !!} --}}

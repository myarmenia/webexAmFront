@extends('layouts/contentNavbarLayout')

@section('title', 'Account settings - Account')
@section('page-script')
{{-- <script src="{{ asset('assets/js/111.js') }}"></script> --}}
@endsection

@section('content')

<h4 class="py-3 mb-4">
    <span class="text-muted fw-light">Пользователи /</span> Создать нового пользователя
</h4>
<div class="card">

    <div class="d-flex justify-content-between align-items-center">
        <div>
            <h5 class="card-header">Создать нового пользователя</h5>
        </div>

    </div>
    <div class="card-body">

        <form>
            <div class="mb-3 row">
                <label for="html5-text-input" class="col-md-2 col-form-label">Имя</label>

                <div class="col-md-10">
                    <input class="form-control" type="text" value="Sneat" id="html5-text-input">
                </div>
            </div>
            <div class="mb-3 row">
                <label for="html5-search-input" class="col-md-2 col-form-label">Э. почта</label>

                <div class="col-md-10">
                    <input class="form-control" type="search" value="Search ..." id="html5-search-input">
                </div>
            </div>
            <div class="mb-3 row">
                <label for="html5-text-input" class="col-md-2 col-form-label">Телефон</label>


                <div class="col-md-10">
                    <input class="form-control" type="text" value="Sneat" id="html5-text-input">
                </div>
            </div>


            <div class="mb-3 row">

                <label for="exampleFormControlSelect1" class="col-md-2 col-form-label">Роли</label>
                <div class="col-md-10">

                    <select class="form-select" id="role" aria-label="Default select example" name="roles[]">

                        <option>Роли</option>
                        @foreach ($roles as $role)
                        <option value="{{ $role}}">{{ $role}}</option>
                        @endforeach

                    </select>
                </div>
            </div>

            <div class="mb-3 row">
                <label for="html5-text-input" class="col-md-2 col-form-label"></label>
                <div class="d-flex col-md-10">

                    <div class="col-md-2 form-check form-switch mb-2">

                        <input class="form-check-input" type="checkbox" id="status" checked>
                        <label class="form-check-label" for="status">Статус</label>
                    </div>
                    <div class="col-md-2 form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="passport" >
                        <label class="form-check-label" for="passport">Пасспорт</label>
                    </div>
                    <div class="col-md-4 form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="payment_status" >

                        <label class="form-check-label" for="payment_status">Статус платежа</label>


                    </div>



                </div>



            </div>
        </form>
    </div>


</div>


@endsection

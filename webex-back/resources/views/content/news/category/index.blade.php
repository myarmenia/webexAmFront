@extends('layouts/contentNavbarLayout')

@section('title', 'Tables - Basic Tables')
@section('page-script')
<script src="{{ asset('assets/js/delete-item.js') }}"></script>
@endsection


@section('content')

<h4 class="py-3 mb-4">
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <a href="javascript:void(0);">Категория новостей</a>
            </li>
            <li class="breadcrumb-item active">Список</li>
        </ol>
    </nav>
</h4>

<hr class="my-5">

<div class="card">
  @include('includes.alert')
  <div class="d-flex justify-content-between align-items-center" >
    <div>
      <h5 class="card-header">Имя категории</h5>
    </div>
    <div>
      <a href="{{route('news-category-create-page')}}" class="btn btn-primary mx-4">Создать </a>
    </div>
  </div>
  <div class="card-body">

    <div class="table-responsive text-nowrap">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Имя</th>
            <th>Am</th>
            <th>Ru</th>
            <th>En</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          @if (count($category)>0)
            @foreach ($category as $item )
            <tr>
              <td><span class="fw-medium">{{$item['type']}}</span></td>
              <td><span class="fw-medium">{{$item['translations']['am']->name}}</span></td>
              <td><span class="fw-medium">{{$item['translations']['ru']->name}}</span></td>
              <td><span class="fw-medium">{{$item['translations']['en']->name}}</span></td>
              <td>
                <div class="dropdown action" data-id="{{ $item['id'] }}" data-tb-name="news_categories">
                    <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                        <i class="bx bx-dots-vertical-rounded"></i>
                    </button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="{{route('news_category_edit', $item['id'])}}"><i class="bx bx-edit-alt me-1"></i>Редактировать</a>
                        <button type="button" class="dropdown-item click_delete_item" data-bs-toggle="modal" data-bs-target="#smallModal"><i class="bx bx-trash me-1"></i>
                            Удалить</button>
                    </div>
                </div>

              </td>
            </tr>

            @endforeach

          @else
          <tr>
            <td colspan="3">There is no record </td>
          </tr>

          @endif
        </tbody>
      </table>
    </div>
  </div>
</div>
@endsection
<x-modal-delete></x-modal-delete>


@extends('layouts/contentNavbarLayout')

@section('title', ' Horizontal Layouts - Forms')

@section('content')
<h4 class="py-3 mb-4"><span class="text-muted fw-light">Forms/</span> Horizontal Layouts</h4>

<!-- Basic Layout & Basic with Icons -->
<div class="row">
  <!-- Basic Layout -->
  <div class="col-xxl">
    <div class="card mb-4">
      <div class="card-header d-flex align-items-center justify-content-between">
        <h5 class="mb-0">Create Language lesson</h5>
         {{-- <small class="text-muted float-end">Default label</small> --}}
      </div>
      <div class="card-body">
        <form  action="{{route('lesson-store')}}" method="post" enctype="multipart/form-data">
          @csrf
            <!-- Dropdown with icon -->
            <div class="row mb-3">
              <label class="col-sm-2 col-form-label" for="basic-default-name">Language Name</label>
              <div class="col-sm-10">

                <select class="form-select" name="course_language_id" id="exampleFormControlSelect1" aria-label="Default select example">
                  <option disabled> Language name</option>
                  @if (count($course_language)>0)
                    @foreach ($course_language as $item)
                      <option value="{{ $item->id }}">{{$item->name}}</option>
                    @endforeach

                  @else
                    <option value="">There is no records</option>
                  @endif
                </select>
              </div>
            </div>
            <!--/ Dropdown with icon -->

          <div class="row mb-3">
            <label class="col-sm-2 col-form-label" for="basic-default-name">Duration</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" name="duration" id="basic-default-name" value="{{old('duration')}}" placeholder="Duration" />
              @if($errors->has("duration"))
                <div class="alert alert-danger mt-2">{{ $errors->first("duration") }}</div>
              @endif

            </div>
          </div>
          {{-- {{dd(languages())}} --}}
          @foreach (languages() as $lang )

            <div class="row mb-3">
              <label class="col-sm-2 col-form-label" for="basic-default-name">Title {{$lang}}</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" name="translate[{{$lang}}][title]"   id="title" placeholder="Title" />
                @if($errors->has("translate.$lang.title"))
                  <div class="alert alert-danger mt-2">{{ $errors->first("translate.$lang.title") }}</div>
                @enderror

              </div>

            </div>
            <div class="row mb-3">
              <label class="col-sm-2 col-form-label" for="basic-default-name">Description {{$lang}}</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" name="translate[{{$lang}}][description]"   id="description" placeholder="Description" />

                @if($errors->has("translate.$lang.description"))
                  <div class="alert alert-danger mt-2">{{ $errors->first("translate.$lang.description")  }}</div>
                @endif
              </div>
            </div>
          @endforeach


          <div class="row mb-3">
            <label class="col-sm-2 col-form-label" for="basic-default-name">Video</label>
            <div class="col-sm-10">
              <input type="file" class="form-control" name="video" value="{{old('video')}}" id="description" placeholder="Lang" />

              @if($errors->has("video"))
                <div class="alert alert-danger mt-2">{{ $errors->first("video")  }}</div>
              @endif
            </div>
          </div>
          <div class="row justify-content-end">
            <div class="col-sm-10">
              <button type="submit" class="btn btn-primary">Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

</div>
@endsection

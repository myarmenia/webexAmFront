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
        <h5 class="mb-0">Create Lesson's Task</h5>
         {{-- <small class="text-muted float-end">Default label</small> --}}
      </div>
      <div class="card-body">
        <form  action="{{route('task-store')}}" method="post" enctype='multipart/form-data'>
          @csrf
            <!-- Dropdown with icon -->

            <div class="row mb-3">
              <label class="col-sm-2 col-form-label" for="basic-default-name">Lessons title</label>
              <div class="col-sm-10">
                <select class="form-select" name="lesson_id" id="exampleFormControlSelect1" aria-label="Default select example">
                  @if (count($lessons)>0)
                    @foreach ($lessons as $item)
                      <option value="{{ $item->id }}">{{$item->lesson_translations[0]->title}}</option>
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
              <input type="text" class="form-control" name="duration" id="basic-default-name" placeholder="Duration" />

              @if($errors->has("duration"))
                <div class="alert alert-danger mt-2">{{ $errors->first("duration") }}</div>
              @endif
            </div>

          </div>
          @foreach (languages() as $lang )
            <div class="row mb-3">
              <label class="col-sm-2 col-form-label" for="basic-default-name">Description {{$lang}}</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" name="translate[{{$lang}}][description]" id="description" placeholder="Description" />

                @if($errors->has("translate.$lang.description"))
                  <div class="alert alert-danger mt-2">{{ $errors->first("translate.$lang.description")  }}</div>
                @endif
              </div>
            </div>
          @endforeach

          <div class="row mb-3">
            <label class="col-sm-2 col-form-label" for="basic-default-name">Video</label>
            <div class="col-sm-10">
              <input type="file" class="form-control" name="video" id="description" placeholder="video" />
              @error('video')
                <div class="alert alert-danger mt-2">{{ $message }}</div>
              @enderror
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

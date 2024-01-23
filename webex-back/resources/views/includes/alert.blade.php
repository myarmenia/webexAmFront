@if ($success = session()->pull('success'))
    <div class="alert alert-success">
        {{ $success }}
    </div>
@endif
<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;

class LessonRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
      $lastSegment = Request::segment(count(request()->segments()));
    
        $array = [
            'course_language_id'=>'required',
            'duration' =>'required',
            'translate.*.title'=>'required',
            // 'translate.*.description'=>'required',
            'number'=>'required',
        ];
        // lesson-store
        // if($lastSegment=="lesson-create"){
        //   $array['upload_file'] = 'required|mimes:mp4,mov,ogg,qt,MP4';
        // }

        return  $array;

    }
    public function messages(): array
    {
        return [
          'duration' => 'Поле продолжительность обязательно для заполнения',
          'translate.*.title'=>'Поле название  обязательно для заполнения.',
          // 'translate.*.description'=>'Поле описание обязательно для заполнения.',
          'number'=>'Поле номер урока обязательно для заполнения.',
          // 'upload_file'=>'Поле видео обязательно для заполнения.'
        ];
    }

}

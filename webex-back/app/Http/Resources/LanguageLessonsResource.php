<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class LanguageLessonsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
// dd($this);
        return [
          'id' => $this->id,
          'number' => $this->number,
          'duration' => $this->duration,
          'title' =>$this->translation($request->lang)->title,
          'description' => $this->translation($request->lang)->description,

        ];

    }


}

<?php

namespace App\Http\Resources\WEB;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AllCourseLessonsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {

      return [
        'id' => $this->id,
        'number' => $this->number,
        'duration' => $this->duration,
        'title' =>$this->translation("ru")->title,
        // 'description' => $this->translation("ru")->description,

      ];

    }
}

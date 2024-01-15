<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CurrentLessonResource extends JsonResource
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
        'video'=> $this->video,
        'duration' => $this->duration,
        'title' => $this->translation($request->lang)->title,
        'description' => $this->lesson_translations[0]->description,
        'tasks'=>TasksResource::collection($this->tasks),

      ];
    }
}

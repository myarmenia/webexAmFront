<?php

class Translation
{
    protected $translation;

    public function __construct($lang)
    {
        $path = resource_path("lang/{$lang}.json");
        // dd(json_decode(file_get_contents($path), true));
        $this->translation = json_decode(file_get_contents($path), true);
    }

   public function get($key)
   {
        return $this->translation[$key] ?? $key;
   }
}

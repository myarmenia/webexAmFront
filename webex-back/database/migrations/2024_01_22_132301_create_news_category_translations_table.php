<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('news_category_translations', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('news_category_id')->unsigned();
            $table->foreign('news_category_id')->references('id')->on('news_categories')->onUpdate('cascade')->onDelete('cascade');            
            $table->string('name');
            $table->string('lang')->index();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('news_category_translations');
    }
};

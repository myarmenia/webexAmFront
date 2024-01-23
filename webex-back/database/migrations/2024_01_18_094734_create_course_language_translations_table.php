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
        Schema::create('course_language_translations', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('course_language_id')->unsigned();
            $table->foreign('course_language_id')->references('id')->on('course_languages')->onUpdate('cascade')->onDelete('cascade');
            $table->longText('description');
            $table->string('lang');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('course_language_translations');
    }
};

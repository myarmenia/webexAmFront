<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\Courses\CourseLanguagesController;
use App\Http\Controllers\API\ForgotPasswordController;
use App\Http\Controllers\API\Lessons\LessonController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'api'], function ($router) {

    Route::group(['prefix' => 'auth'], function ($router) {
        Route::post('login', [AuthController::class, 'login']);
        Route::post('logout', [AuthController::class, 'logout']);
        Route::post('signup', [AuthController::class, 'signup']);
        Route::post('refresh', [AuthController::class, 'refresh']);
        Route::post('me', [AuthController::class, 'me']);
        // =================================================================
        // Route::apiResource('course-language', 'CourseLanguagesController');
        Route::get('course-language',[CourseLanguagesController::class,'index']);
        Route::get('language-lessons/{id}',[LessonController::class,'languageLessons']);
    });

    Route::post('forgot-password', [ForgotPasswordController::class, 'sendResetLink']);
    Route::post('check-forgot-token', [ForgotPasswordController::class, 'checkForgotToken']);
    Route::post('send-new-password', [ForgotPasswordController::class, 'sendNewPassword']);

});

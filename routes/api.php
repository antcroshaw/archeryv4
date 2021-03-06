<?php

use App\Http\Controllers\HandicapController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\HandicapListController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::prefix('/handicaps')->group( function(){
    Route::post('/store',[HandicapController::class,'store']);
    Route::put('/{id}',[HandicapController::class,'update']);
    Route::delete('/{id}',[HandicapController::class,'destroy']);
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/handicapScores/{name}',[HandicapController::class,'getScores']);
Route::get('/handicaps',[HandicapController::class,'index']);
Route::get('/handicapList',[HandicapListController::class,'index']);
Route::post('handicapList',[HandicapListController::class,'store']);


Route::get('/categories',[CategoryController::class,'index']);


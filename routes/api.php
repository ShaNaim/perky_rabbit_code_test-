<?php
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
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
// Route::get('/register',[AuthController::class,'register']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::post('/product', [ProductController::class, 'addNewProduct']);
Route::get('/product', [ProductController::class, 'getProduct']);

Route::post('/product/{id}', [ProductController::class, 'updateProductUnitById']);

// Route::post('/product/{id}', [ProductController::class, 'updateProductInfoById']);
Route::get('/product/{id}', [ProductController::class, 'getProductById']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

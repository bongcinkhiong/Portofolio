<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\TestController;
use App\Http\Controllers\User\BukuController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::prefix('admin')->middleware('CekRole:admin')->group(function () {

    Route::get('/',[AdminController::class, 'index']);

    Route::prefix('')->controller()->group(function () {

    });

});


Route::prefix('user')->middleware('CekRole:user')->group(function () {

    Route::get('/',[UserController::class, 'index']);

    Route::prefix('buku')->controller(BukuController::class)->group(function () {

        Route::get('/','index');
        Route::get('/create','create');
        Route::post('/create','store');
        Route::get('/{id}/edit','edit');
        Route::put('/{id}/edit','update');
        Route::get('/{id}/destroy','destroy');
    });
});

require __DIR__.'/auth.php';

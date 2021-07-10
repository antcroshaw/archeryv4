<?php

namespace App\Http\Controllers;

use App\Models\HandicapList;
use Illuminate\Http\Request;

class HandicapListController extends Controller
{
    public function index(): \Illuminate\Support\Collection
    {
        return HandicapList::all()->pluck('name');
    }
}

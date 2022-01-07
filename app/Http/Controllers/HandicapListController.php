<?php

namespace App\Http\Controllers;

use App\Models\HandicapList;
use Illuminate\Http\Request;

class HandicapListController extends Controller
{
    public function index(): \Illuminate\Support\Collection
    {
        return HandicapList::all();
    }

    public function store(Request $request)
    {
        $newHandicapName = new HandicapList;
        $newHandicapName->name = $request->name;
        $newHandicapName->categoryId = $request->categoryId;
        $newHandicapName->save();
    }
}

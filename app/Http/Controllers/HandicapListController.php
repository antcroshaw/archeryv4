<?php

namespace App\Http\Controllers;

use App\Models\HandicapList;
use Illuminate\Http\Request;

class HandicapListController extends Controller
{
    public function index(){
        return HandicapList::all();
    }
}

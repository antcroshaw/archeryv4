<?php

namespace App\Http\Controllers;

use App\Models\Handicap;
use Illuminate\Http\Request;

class HandicapController extends Controller
{
    public function index(){
        return Handicap::all();
    }

    public function store(Request $request)
    {
        $newHandicap = new Handicap;
        $newHandicap->score = $request->item['score'];
        $newHandicap->save();

        return $newHandicap;
    }

    public function update(Request $request, $id) {

       $handicap = Handicap::find($id);
       $handicap->score = $request->score;
       $handicap->save();


    }
}
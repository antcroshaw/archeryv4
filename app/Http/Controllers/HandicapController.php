<?php

namespace App\Http\Controllers;

use App\Models\Handicap;
use App\Models\HandicapList;
use Illuminate\Http\Request;

class HandicapController extends Controller
{
    public function index(){
        return Handicap::all();
    }

    public function getScores($name): \Illuminate\Support\Collection
    {
        return Handicap::all()->where('name', $name);

    }

    public function store(Request $request)
    {

        $newHandicap = new Handicap;
        $newHandicap->score = $request->score;
        $newHandicap->name = $request->name;
//
        $newHandicap->save();



    }

    public function update(Request $request, $id) {

       $handicap = Handicap::find($id);
       $handicap->score = $request->score;
       $handicap->save();


    }

    public function destroy($id) {

        $handicap = Handicap::find($id);
        if($handicap) {
            $handicap->delete();
        }

    }
}

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
        $newHandicap->score = $request->score;
//
        $newHandicap->save();

        return redirect('/handicaps');

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

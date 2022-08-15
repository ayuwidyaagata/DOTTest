<?php

namespace App\Http\Controllers;

use App\Models\rumah;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RumahController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return inertia::render('Homepage',);
    }

    public function datarumah()
    {
        return inertia::render('Rumah',);
    }

    public function dataPenjual()
    {
        return inertia::render('User',);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return inertia::render('FormRumah');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\rumah  $rumah
     * @return \Illuminate\Http\Response
     */
    public function show(rumah $rumah)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\rumah  $rumah
     * @return \Illuminate\Http\Response
     */
    public function edit(rumah $rumah)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\rumah  $rumah
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, rumah $rumah)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\rumah  $rumah
     * @return \Illuminate\Http\Response
     */
    public function destroy(rumah $rumah)
    {
        //
    }
}

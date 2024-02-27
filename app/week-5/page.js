"use client";
import ItemList from './item-list.js';
import React from 'react';



export default function Page(){
    return (<main> 
        <h1 className= "text-3xl font-bold ml-4 mt-4 "> Shopping List </h1>
        <ItemList/>
    </main>);
}
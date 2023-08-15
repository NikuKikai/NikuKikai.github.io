import React, { useEffect, useLayoutEffect, useRef, useState, PropsWithChildren } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/Home';
import AppNull1 from './routes/Null1';

import './App.css';


function App() {

    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path='/null1' element={ <AppNull1/> }/>
            </Routes>
        </div>
    );
}


export default App;

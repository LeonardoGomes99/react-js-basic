import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState,useEffect } from 'react';

import Home from './Home';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;
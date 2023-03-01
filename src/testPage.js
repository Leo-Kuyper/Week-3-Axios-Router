import React from "react";
import { useEffect, useState } from "react";
import './App.css'
import axios from "axios";
import { Link } from "react-router-dom";

const TestPage = () => {

    return(
        <div className="App">
            <header className="App-header">
                <p>Test Page</p>
                <Link to="/">
                    <button>API Page</button>
                </Link>
            </header>
        </div>
    )
}

export default TestPage
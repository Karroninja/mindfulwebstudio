// Rotkomponenten där du sätter upp din routing och applikationsstruktur.
"use strict";
import React from "react";
import { FrameLeft, FrameTop, FrameRight, FrameBottom } from "./components/Header/Header";
import { AboveTheFold } from './components/AboveTheFold/AboveTheFold';
import { PackageDiv } from './components/Packages/Packages';

function App() {
    return (
        <div className="container">
            <FrameTop />
            <FrameLeft />
            <main>
                <AboveTheFold />
                <PackageDiv />
            </main>
            <FrameRight />
            <FrameBottom />
        </div>
    );
}

export default App;
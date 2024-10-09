// Rotkomponenten där du sätter upp din routing och applikationsstruktur.
"use strict";
import React from "react";
import { FrameLeft, FrameTop, FrameRight, FrameBottom } from "./components/Header/Header";
import { AboveTheFold } from './components/AboveTheFold/AboveTheFold';
import { PackageDiv } from './components/Packages/Packages';
import { BookingDiv } from "./components/Booking/Booking";
import { Footer } from "./components/Footer/Footer";

function App() {
    return (
        <div className="container">
            <FrameTop />
            <FrameLeft />
            <main>
                <AboveTheFold />
                <PackageDiv />
                <BookingDiv />
                <Footer />
            </main>
            <FrameRight />
            <FrameBottom />
        </div>
    );
}

export default App;
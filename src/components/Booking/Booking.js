"use strict";
import React from "react";
import styles from "./Booking.module.css";

export function BookingDiv() {
    return (
        <section className={styles.BookingDiv}>
            <div>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button>Läs mer..</button>
            </div>
            <form>
                <div>
                    <h2>01</h2>
                    <h3>Lorem ipsum dolor</h3>
                    <input type="text"></input>
                    <button>Nästa</button>
                </div>
                <hr></hr>
                <div>
                    <h2>02</h2>
                    <h3>Lorem ipsum dolor</h3>
                </div>
                <hr></hr>
                <div>
                    <h2>03</h2>
                    <h3>Lorem ipsum dolor</h3>
                </div>
                <hr></hr>
                <div>
                    <h2>04</h2>
                    <h3>Lorem ipsum dolor</h3>
                </div>
            </form>
        </section>
    );
}
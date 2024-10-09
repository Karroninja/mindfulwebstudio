"use strict";
import React, { useState } from "react";
import { CalendarDiv } from "./Calendar";
import { sendFormDataToServer } from "../../services/apiServices";
import styles from "./Booking.module.css";
import { sv } from 'date-fns/locale/sv';
import { format } from 'date-fns';
import { sv as localeSv } from 'date-fns/locale';

export function BookingDiv() {
    // State för att lagra formulärvärden
    const [formData, setFormData] = useState({
        kontaktuppgifter1: "",
        kontaktuppgifter2: "",
        date: null,
        time: "",
        kontaktuppgifter4: ""
    })

    // Hantera formulärinmatningen
    const handleInputChange = function(e) {
        const { name, value } = e.target;
        return setFormData({
            ...formData, // Bevara övriga värden i formData
            [name]: value // Uppdatera endast den nyckeln som gäller.
        });
    }

    // Hantera datum och tid som kommer från CalendarDiv
    const handleDateChange = function(selectedDate) {
        const formatDate = format(selectedDate, "EEEE MMMM dd yyyy", { locale: localeSv });
        return setFormData({
            ...formData, // Bevara övriga värden i formData
            date: formatDate
        });
    }
    const handleTimeChange = function(selectedTime) {
        return setFormData({
            ...formData,
            time: selectedTime
        });
    }

    // Den här funktionen hanterar när formuläret skickas, formuläret skickas till serversidan för vidare hantering
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log("Formulärdata: ", formData);
        try {
            sendFormDataToServer(formData);
        } catch (error) {
            console.error('Fel vid skick av formulär: ', error);
        }
    }

    function handleClick(e) {
        e.preventDefault();
        console.log("du har klickat");
        //let coll = document.getElementsByClassName('');
    }
    return (
        <section className={styles.BookingDiv}>
            <div>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button>Läs mer..</button>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={styles.Collapse}>
                    <h2>01 Lorem ipsum dolor</h2>
                    <input
                        type="text"
                        name="kontaktuppgifter1"
                        value={FormData.kontaktuppgifter1}
                        onChange={handleInputChange}
                    />
                    <button type="button" className="next" onClick={handleClick}>Nästa</button>
                </div>
                <hr></hr>
                <div className={styles.Collapse}>
                    <h2>02 Lorem ipsum dolor</h2>
                    <input
                        type="text"
                        name="kontaktuppgifter2"
                        value={FormData.kontaktuppgifter2}
                        onChange={handleInputChange}
                    />
                    <button type="button" className="next">Nästa</button>
                </div>
                <hr></hr>
                <div className={styles.Collapse}>
                    <h2>03 Lorem ipsum dolor</h2>
                    <CalendarDiv
                        onDateChange={handleDateChange}
                        onTimeChange={handleTimeChange}
                    />
                    <button type="button" className="next">Nästa</button>
                </div>
                <hr></hr>
                <div className={styles.Collapse}>
                    <h2>04 Lorem ipsum dolor</h2>
                    <input type="text" name="kontaktuppgifter4"></input>
                    <input type="submit" value="Skicka"></input>
                </div>
            </form>
        </section>
    );
}

function Next() {
    console.log("button is clicked");
    console.log(this)
}
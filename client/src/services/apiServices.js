"use strict";
import React, { useState } from 'react';

export async function sendFormDataToServer(formData) {
    console.log(JSON.stringify(formData));
    try {
        const res = await fetch('http://localhost:7777/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (res.ok) {
            console.log('Formuläret har skickats till servern');
        } else {
            console.log("Något gick fel!");
        }
    } catch (error) {
        console.error('Error: ', error);
    }
}

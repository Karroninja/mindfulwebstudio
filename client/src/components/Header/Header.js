"use strict";
import React from "react";
import styles from "./Header.module.css";

export function FrameTop() {
    return (
        <div className={styles.FrameTop}>
            <a href="./" className={styles.logo}>
                <img src="assets/logo_primary_black.svg" alt="Mindful Web Studio Logo"/>
            </a>
        </div>
    );
}

export function FrameLeft() {
    return (
        <nav className={styles.FrameLeftNavbar}>
            <ul>
                <li>
                    <a href="./">Hem</a>
                </li>
                <li>
                    <a href="#">Om Oss</a>
                </li>
            </ul>
        </nav>
    );
}

export function FrameRight() {
    return (
        <div className={styles.FrameRight}>

        </div>
    );
}

export function FrameBottom() {
    return (
        <div className={styles.FrameBottom}>

        </div>
    );
}
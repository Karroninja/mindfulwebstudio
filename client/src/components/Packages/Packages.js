"use strict";
import React from "react";
import styles from "./Packages.module.css";

export function PackageDiv() {
    return (
        <section className={styles.Packages}>
            <div>
                <h1>01</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum, metus vel accumsan accumsan, velit turpis luctus metus.</p>
            </div>
            <div>
                <h1>02</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum, metus vel accumsan accumsan, velit turpis luctus metus.</p>
            </div>
            <div>
                <h1>03</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum, metus vel accumsan accumsan, velit turpis luctus metus.</p>
            </div>
        </section>
    );
}
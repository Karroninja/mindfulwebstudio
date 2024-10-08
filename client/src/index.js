// Inträdespunkten där React renderar App.js till DOM-trädet.
"use strict";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "normalize.css";
import "./styles/styles.css";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
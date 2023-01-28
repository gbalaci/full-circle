"use client";
import React from "react";
import styles from "./layout.module.css";
import {Typography} from "@mui/material";

export default function RootLayout({children}: {
    children: React.ReactNode,
}) {
    return (
        <div className={styles.container}>
            <nav className={styles.nav}><Typography variant="h6">Full Circle</Typography></nav>
            <div className={styles.container}>
                {children}
            </div>
        </div>
    );
}
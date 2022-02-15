import type { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import Head from "next/head";

const App = (props: AppProps) => {
    const { Component, pageProps } = props;

    return (
        <>
            <Head>
                <title>project 2220</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <CssBaseline />
            <Component {...pageProps} />
        </>
    );
};

export default App;
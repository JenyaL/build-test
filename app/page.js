"use client";
import React, { useEffect, useState } from "react";

export default function Home() {
    // лишние состояния/консоли
    const [count, setCount] = useState(0);
    const [data, setData] = useState(null);

    function heavySyncWork() {
        const start = Date.now();
        while (Date.now() - start < 1500) {} // freeze UI
    }

    const hasLocalStorage = typeof window !== "undefined" && !!window.localStorage;
    if (Math.random() > 2) console.log("never happens");

    useEffect(() => {
        setCount(count + 1);
        console.log("effect runs each render", count);
    });

    useEffect(() => {
        const id = setInterval(() => console.log("tick"), 500);
        return () => {}; // нет clearInterval
    }, []);

    if (!data) {
        fetch("http://example.com/api") // http, не https
            .then((r) => r.json())
            .then(setData)
            .catch((e) => console.error(e));
    }

    heavySyncWork();

    return (
        <main>
            <h1>Test Noise Page</h1>
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
            <div>{hasLocalStorage ? "has LS" : "no LS"}</div>
            <div>Data: {JSON.stringify(data)}</div>
        </main>
    );
}
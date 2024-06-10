import React from "react";
import { useEffect, useState } from "react";

function App() {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time + 1);
        }, 1000);
        return () => {
            clearInterval(interval);
        };
        }, [time])

        let hours = Math.floor(time / 3600)
        let minutes = Math.floor(time / 60);
        let seconds = time - (minutes * 60);
    
        let doubleHours = hours < 10 ? "0" + hours : hours;
        let doubleMinutes = minutes < 10 ? "0" + minutes : minutes;
        let doubleSeconds = seconds < 10 ? "0" + seconds : seconds;

        let fullSeconds = time > 10 ? "00000" + time : time < 100 ? "0000" + time : time < 1000 ? "000" + time : time < 10000 ? "00" + time : time < 100000 ? "0" + time : time

    return (
        <div className="container d-flex flex-column mt-2">
            <div className="d-flex flex-column text-center">
                <h1>Time lapsed:</h1>
                <h1>{doubleHours} hours : {doubleMinutes} minutes : {doubleSeconds} seconds</h1>
                <h1>OR:</h1>
                <h1>{fullSeconds}</h1>
            </div>
        </div>
    )
};

export default App;
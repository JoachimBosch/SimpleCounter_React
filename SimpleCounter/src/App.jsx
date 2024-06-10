import React from "react";
import { useEffect, useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time + 1);
        }, 1000);
        return () => {
            clearInterval(interval);
        };
        }, [time]);

        const resetTime = () => {
            setTime(0);
        };

        let hours = Math.floor(time / 60) % 60;
        let minutes = Math.floor(time / 60);
        let seconds = time - (minutes * 60);
    
        let doubleHours = hours < 10 ? "0" + hours : hours;
        let doubleMinutes = minutes < 10 ? "0" + minutes : minutes;
        let doubleSeconds = seconds < 10 ? "0" + seconds : seconds;

        let fullSeconds = time > 10 ? "00000" + time : time < 100 ? "0000" + time : time < 1000 ? "000" + time : time < 10000 ? "00" + time : time < 100000 ? "0" + time : time

        let fullTime = time < 1000000 && time >= 100000 ? time : time < 100000 && time >= 10000 ? "0" + time : time < 10000 && time > 1000 ? "00" + time : time < 1000 && time >= 100 ? "000" + time : time < 100 && time >= 10 ? "0000" + time : "00000" + time

    return (
        <div className="container d-flex flex-column mt-5">
            <div className="d-flex flex-column text-center text-primary">
                <h1>Time lapsed:</h1>
                <h2 className="text-dark">{doubleHours} hours : {doubleMinutes} minutes : {doubleSeconds} seconds</h2>
                <h2>in total seconds:</h2>
                <div className="d-flex justify-content-center text-dark">
                    <h2><i className="fas fa-clock"></i> {fullTime}</h2> 
                </div>
                <div className="mt-5">
                <button onClick={resetTime} className="btn btn-danger mt-3">Reset Timer</button>
                </div>
                
            </div>
        </div>
    )
};

export default App;
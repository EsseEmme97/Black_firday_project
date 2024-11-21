import { useState, useEffect } from "react";

export default function Countdown() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        let timer = setInterval(() => {
            setTime((time) => {
                if (time == 0) {
                    clearInterval(timer);
                    return 0;
                } else {
                    return new Date();
                }
            });
        },60000);
    }, [time]);

    const timeOutDate = new Date(2024, 11, 1);
    let timeRemaining_ms = timeOutDate - time;

    const daysLeft = Math.round(timeRemaining_ms / 86400000);
    timeRemaining_ms = timeRemaining_ms % 86400000;
    const hoursLeft = Math.round(timeRemaining_ms / (1000 * 60 * 60));
    timeRemaining_ms = timeRemaining_ms % (1000 * 60 * 60);
	const minutesLeft= Math.floor(timeRemaining_ms/60000);

    return (
        <section className="flex gap-10 text-6xl justify-center font-bold my-40">
            <div>
                <h2 className="text-center">{daysLeft}</h2>
                <p className="uppercase text-2xl">days</p>
            </div>
            <div>
                <h2 className="text-center">{hoursLeft}</h2>
                <p className="uppercase text-2xl">hours</p>
            </div>
            <div>
                <h2 className="text-center">{minutesLeft}</h2>
                <p className="uppercase text-2xl">minutes</p>
            </div>
        </section>
    );
}

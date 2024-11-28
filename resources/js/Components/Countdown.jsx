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
        <section className="flex gap-10 text-4xl md:text-6xl justify-center font-bold my-32 md:my-40">
            <div>
                <h2 className="text-center">{daysLeft<10 ? `0${daysLeft}` : daysLeft}</h2>
                <p className="uppercase text-xl text-center">days</p>
            </div>
            <div>
                <h2 className="text-center">{hoursLeft<10 ? `0${hoursLeft}` : hoursLeft}</h2>
                <p className="uppercase text-xl text-center">hours</p>
            </div>
            <div>
                <h2 className="text-center">{minutesLeft<10 ? `0${minutesLeft}` : minutesLeft}</h2>
                <p className="uppercase text-xl text-center">minutes</p>
            </div>
        </section>
    );
}

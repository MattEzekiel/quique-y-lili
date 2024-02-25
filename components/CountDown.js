'use client';
import { useEffect, useState } from "react";

const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

const date = 'March 2, 2024 17:00:00';

function CountDown() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [now, setNow] = useState(false);

    useEffect(() => {
        const count_down = new Date(date).getTime();

        const interval = setInterval(function () {
            const now = new Date().getTime();
            const distance = count_down - now;

            setDays(Math.floor(distance / day));
            setHours(Math.floor((distance % (day)) / (hour)));
            setMinutes(Math.floor((distance % (hour)) / (minute)));
            setSeconds(Math.floor((distance % (minute)) / second));

            if (distance < 0) {
                setNow(true);
                clearInterval(interval);
            }
        },0);
    }, []);

    return (
        <>
            {
                !now ?
                    (
                        <ul className={"flex justify-center items-center gap-x-5 md:gap-x-10"}>
                            <li className={"flex flex-col justify-center items-center text-2xl"}>{days} <span className={"text-base xl:text-lg capitalize"}>{ days === 1 ? 'dia' : 'dias'}</span></li>
                            <li className={"flex flex-col justify-center items-center text-2xl"}>{hours} <span className={"text-base xl:text-lg capitalize"}>{ hours === 1 ? 'hora' : 'horas' }</span></li>
                            <li className={"flex flex-col justify-center items-center text-2xl"}>{minutes} <span className={"text-base xl:text-lg capitalize"}>{ minutes === 1 ? 'minuto' : 'minutos' }</span></li>
                            <li className={"flex flex-col justify-center items-center  text-2xl"}>{seconds} <span className={"text-base xl:text-lg capitalize"}>{ seconds === 1 ? 'segundo' : 'segundos' }</span></li>
                    	</ul>
                    )
                    :
                    (
                        <h3 className={"text-center uppercase text-6xl xl:text-7xl"}>¡Es hoy!</h3>
                    )
            }
        </>
    );
}

export default CountDown;

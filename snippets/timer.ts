import { useState, useEffect } from "react";

const [seconds, setSeconds] = useState(0);

useEffect(() => {
    const interval = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(interval);
}, [seconds]);

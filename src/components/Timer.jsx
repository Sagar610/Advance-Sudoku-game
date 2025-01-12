import React, { useEffect } from "react";

const Timer = ({ time, setTime }) => {
  useEffect(() => {
    const interval = setInterval(() => setTime((prev) => prev + 1), 1000);
    return () => clearInterval(interval);
  }, [setTime]);

  return <div className="text-lg">Time: {time} s</div>;
};

export default Timer;

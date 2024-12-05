import React from "react";

const formatTime = (totalTimeInSeconds: number, format: string) => {
  const seconds = totalTimeInSeconds % 60;
  const minutes = parseInt((totalTimeInSeconds / 60).toString()) % 60;
  const hours = parseInt((totalTimeInSeconds / (60 * 60)).toString());
  return {
    timer:
      format === "hh:mm:ss"
        ? `${hours}:${minutes}:${seconds}`
        : `${minutes}:${seconds}`,
    hours,
    minutes,
    seconds,
  };
};

const useCountDownTimer = (totalTime: number, format: string) => {
  const [time, setTime] = React.useState(totalTime);

  const resetTimer = React.useCallback(() => {
    setTime(totalTime);
  }, [totalTime]);

  React.useEffect(() => {
    const ref = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
    return () => {
      clearInterval(ref);
    };
  }, []);

  return { ...formatTime(time, format), reset: resetTimer };
};

export default useCountDownTimer;

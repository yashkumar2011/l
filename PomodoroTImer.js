import { useState, useEffect } from "react";

const WORK_TIME = 2 * 60 * 60; // 2 hours in seconds
const BREAK_TIME = 30 * 60; // 30 minutes in seconds

export default function PomodoroTimer() {
  const [time, setTime] = useState(WORK_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [isWorkSession, setIsWorkSession] = useState(true);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            setIsRunning(false);
            setIsWorkSession(!isWorkSession);
            setTime(isWorkSession ? BREAK_TIME : WORK_TIME);
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, isWorkSession]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">{isWorkSession ? "Work Time" : "Break Time"}</h1>
      <div className="text-6xl font-mono mb-6">{formatTime(time)}</div>
      <button
        onClick={() => setIsRunning(!isRunning)}
        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-xl"
      >
        {isRunning ? "Pause" : "Start"}
      </button>
    </div>
  );
}

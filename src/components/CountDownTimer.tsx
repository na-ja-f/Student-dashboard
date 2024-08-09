import { useEffect, useState } from "react";
import { Clock4 } from "lucide-react";

function CountDownTimer() {
  const initialTime = 2 * 3600 + 41 * 60;
  const [timeLeft, setTimeLeft] = useState<number>(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  });

  const formatTime = (time: number): string => time.toString().padStart(2, "0");

  // Calculate hours, minutes, and seconds
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="text-[#1469D3] flex gap-[8px] text-sm font-semibold items-center">
      {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
      <Clock4 width={16.67} height={16.67} strokeWidth={3}/>
    </div>
  );
}

export default CountDownTimer;

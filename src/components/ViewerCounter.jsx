import { useEffect, useState } from "react";

const ViewerCounter = () => {
  const [viewers, setViewers] = useState(23);

  useEffect(() => {
    const interval = setInterval(() => {

      const change = Math.floor(Math.random() * 5) - 2; 
      // random change between -2 and +2

      setViewers((prev) => {
        let next = prev + change;

        if (next < 15) next = 18;
        if (next > 40) next = 35;

        return next;
      });

    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center mt-4">

      <p className="text-orange-400 text-sm font-semibold animate-pulse">
        🔥 {viewers} creators are viewing this Library right now
      </p>

    </div>
  );
};

export default ViewerCounter;
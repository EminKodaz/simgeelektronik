import React, { useState, useEffect } from "react";

const Counter = ({ maxCount }) => {
  const [projectCount, setProjectCount] = useState(0);

  useEffect(() => {
    if (projectCount < maxCount) {
      const interval = setInterval(() => {
        setProjectCount((prevCount) => {
          if (prevCount < maxCount) {
            return prevCount + 1;
          } else {
            clearInterval(interval);
            return prevCount;
          }
        });
      }, 5); // Her projeyi 50 milisaniye aralıklarla ekleyeceğiz.

      return () => {
        clearInterval(interval);
      };
    }
  }, [projectCount, maxCount]);

  return <p className="text-5xl text-lightred mb-3 font-bold ">{projectCount}</p>;
};

export default Counter;

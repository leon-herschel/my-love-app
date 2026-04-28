import { useState } from "react";

export default function QuestionCard({ question, next }) {
  const [isMoving, setIsMoving] = useState(false);
  const [position, setPosition] = useState({ top: "60%", left: "60%" });

  const moveNo = () => {
    const randomTop = Math.random() * 70;
    const randomLeft = Math.random() * 70;

    setIsMoving(true);
    setPosition({
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
    });
  };

  return (
    <div className="relative h-[300px] flex flex-col items-center justify-center">

      <h2 className="text-2xl font-semibold text-gray-800 mb-8 animate-fade-in">
        {question}
      </h2>
      <div className="flex gap-4">
        
        <button
          onClick={next}
          className="bg-green-500 text-white px-6 py-3 rounded-full shadow-md hover:scale-110 hover:bg-green-600 transition duration-300"
        >
          Yes
        </button>

        <button
          onMouseEnter={moveNo}
          onClick={moveNo}
          style={
            isMoving
              ? { position: "absolute", ...position }
              : {}
          }
          className="bg-red-400 text-white px-6 py-3 rounded-full shadow-md transition duration-300 hover:cursor-default"
        >
          No
        </button>
      </div>

    </div>
  );
}
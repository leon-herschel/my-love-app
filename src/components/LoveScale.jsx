import { useState } from "react";

export default function LoveScale({ next }) {
  const [selected, setSelected] = useState(null);
  const [hearts, setHearts] = useState([]);
  const [revealText, setRevealText] = useState("");

  const spawnHearts = () => {
    const newHearts = Array.from({ length: 12 }).map(() => ({
      id: Math.random(),
      left: Math.random() * 100,
      size: Math.random() * 20 + 10,
    }));

    setHearts(newHearts);
    setTimeout(() => setHearts([]), 1200);
  };

  const handlePick = (value) => {
    setSelected(value);
    spawnHearts();
    setRevealText("ehehe… knew it 😉");

    setTimeout(() => {
      next();
    }, 2500);
  };

  return (
    <div className="relative text-center animate-fade-in overflow-hidden">

      {hearts.map((h) => (
        <div
          key={h.id}
          className="absolute text-pink-500"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            top: "100%",
            animation: "floatUp 1.2s ease-out forwards",
          }}
        >
          ❤️
        </div>
      ))}

      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        On a scale of 1–5... how much do you love me?
      </h2>

      {/* BUTTONS */}
      <div className="flex flex-col gap-3 items-center">

        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            onClick={() => handlePick(num)}
            className={`w-40 px-4 py-2 rounded-full shadow border transition duration-300
              ${
                selected === num
                  ? "bg-pink-500 text-white border-pink-500 scale-110"
                  : "bg-white text-pink-600 border-pink-300 hover:scale-105"
              }
            `}
          >
            {selected === num ? "5" : num}
          </button>
        ))}

      </div>

      {revealText && (
        <p className="mt-6 text-pink-500 font-medium animate-pulse">
          {revealText}
        </p>
      )}

      <style>
        {`
          @keyframes floatUp {
            0% {
              transform: translateY(0);
              opacity: 1;
            }
            100% {
              transform: translateY(-200px);
              opacity: 0;
            }
          }
        `}
      </style>

    </div>
  );
}